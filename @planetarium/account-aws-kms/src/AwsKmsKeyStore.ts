import { parseSubjectPublicKeyInfo } from "./asn1.js";
import {
  CreateKeyCommand,
  DescribeKeyCommand,
  GetPublicKeyCommand,
  KMSClient,
  type KeyMetadata,
  ListKeysCommand,
  OriginType,
  ScheduleKeyDeletionCommand,
  SignCommand,
} from "@aws-sdk/client-kms";
import {
  type Account,
  type AccountDeletion,
  type AccountGeneration,
  type AccountMetadata,
  type AccountRetrieval,
  type Message,
  type MutableKeyStore,
  PublicKey,
  Signature,
} from "@planetarium/account";

export type AwsKmsKeyId = string; // UUID

export interface AwsKmsMetadata {
  customKeyStoreId?: string;
  description: string;
  multiRegion: boolean;
  origin: OriginType | string;
}

class AwsKmsAccount implements Account {
  readonly #client: KMSClient;

  readonly keyId: AwsKmsKeyId;
  readonly publicKey: PublicKey;

  constructor(keyId: AwsKmsKeyId, publicKey: PublicKey, client: KMSClient) {
    this.keyId = keyId;
    this.publicKey = publicKey;
    this.#client = client;
  }

  async sign(message: Message): Promise<Signature> {
    const cmd = new SignCommand({
      KeyId: this.keyId,
      Message: message,
      SigningAlgorithm: "ECDSA_SHA_256",
    });
    const response = await this.#client.send(cmd);
    if (response.Signature == null) throw new Error("Failed to sign message");
    return Signature.fromBytes(response.Signature);
  }
}

class AwsKmsKeyStore implements MutableKeyStore<AwsKmsKeyId, AwsKmsMetadata> {
  readonly #client: KMSClient;

  constructor(client: KMSClient) {
    this.#client = client;
  }

  #isValidKey(
    metadata: KeyMetadata,
  ): metadata is KeyMetadata & { KeyId: string } {
    return (
      metadata.KeyId != null &&
      metadata.Enabled === true &&
      metadata.DeletionDate == null &&
      metadata.KeySpec === "ECC_SECG_P256K1" &&
      metadata.KeyUsage === "SIGN_VERIFY"
    );
  }

  #mapMetadata(metadata: KeyMetadata): AwsKmsMetadata {
    return {
      customKeyStoreId: metadata.CustomKeyStoreId,
      description: metadata.Description ?? "",
      multiRegion: metadata.MultiRegion ?? false,
      origin: metadata.Origin ?? OriginType.AWS_KMS,
    };
  }

  async *list(): AsyncIterable<AccountMetadata<AwsKmsKeyId, AwsKmsMetadata>> {
    let nextMarker: string | undefined;
    do {
      const listCmd = new ListKeysCommand({
        Marker: nextMarker,
      });
      const resp = await this.#client.send(listCmd);
      const keys = resp.Keys ?? [];
      for (let i = 0; i < keys.length; i += 5) {
        const promises = keys
          .slice(i, i + 5)
          .map(({ KeyId }) => new DescribeKeyCommand({ KeyId }))
          .map((cmd) => this.#client.send(cmd));
        const responses = await Promise.all(promises);
        for (const resp of responses) {
          const metadata = resp.KeyMetadata;
          if (metadata == null || !this.#isValidKey(metadata)) continue;
          yield {
            keyId: metadata.KeyId,
            metadata: this.#mapMetadata(metadata),
            createdAt: metadata.CreationDate,
          };
        }
      }
      nextMarker = resp.NextMarker;
    } while (nextMarker != null);
  }

  async get(
    keyId: AwsKmsKeyId,
  ): Promise<AccountRetrieval<AwsKmsKeyId, AwsKmsMetadata>> {
    const descCmd = new DescribeKeyCommand({ KeyId: keyId });
    const pubKeyCmd = new GetPublicKeyCommand({ KeyId: keyId });
    const descPromise = this.#client.send(descCmd);
    const pubKeyPromise = this.#client.send(pubKeyCmd);
    let descResp;
    let pubKeyResp;
    try {
      descResp = await descPromise;
      pubKeyResp = await pubKeyPromise;
    } catch (e) {
      return { result: "error", keyId, message: e?.toString() };
    }
    if (
      descResp.KeyMetadata == null ||
      !this.#isValidKey(descResp.KeyMetadata) ||
      pubKeyResp.PublicKey == null
    ) {
      return { result: "keyNotFound", keyId };
    }
    const publicKeyBytes: Uint8Array = parseSubjectPublicKeyInfo(
      pubKeyResp.PublicKey,
    );
    const publicKey = PublicKey.fromBytes(publicKeyBytes, "uncompressed");
    return {
      result: "success",
      keyId,
      account: new AwsKmsAccount(keyId, publicKey, this.#client),
      metadata: this.#mapMetadata(descResp.KeyMetadata),
      createdAt: descResp.KeyMetadata.CreationDate,
    };
  }

  async generate(
    metadata?: AwsKmsMetadata,
  ): Promise<AccountGeneration<AwsKmsKeyId>> {
    const cmd = new CreateKeyCommand({
      KeySpec: "ECC_SECG_P256K1",
      CustomKeyStoreId: metadata?.customKeyStoreId,
      Description: metadata?.description,
      MultiRegion: metadata?.multiRegion,
      Origin: metadata?.origin,
    });
    let response;
    try {
      response = await this.#client.send(cmd);
    } catch (e) {
      return {
        result: "error",
        message: (e as { message: string })?.message,
      };
    }
    const keyId = response.KeyMetadata?.KeyId;
    if (keyId == null) {
      return { result: "error", message: "failed to determine keyId" };
    }
    return { result: "success", keyId };
  }

  async delete(keyId: AwsKmsKeyId): Promise<AccountDeletion<AwsKmsKeyId>> {
    const cmd = new ScheduleKeyDeletionCommand({ KeyId: keyId });
    try {
      await this.#client.send(cmd);
    } catch (e) {
      return { result: "error", message: (e as { message?: string }).message };
    }
    return { result: "success", keyId };
  }
}
