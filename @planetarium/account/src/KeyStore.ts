import { type Account } from "./Account.js";
import { RawPrivateKey } from "./RawPrivateKey.js";

export interface AccountMetadata<KeyId, Metadata> {
  readonly keyId: Readonly<KeyId>;
  readonly metadata: Readonly<Metadata>;
  readonly createdAt?: Readonly<Date>;
}

export type AccountRetrieval<KeyId, Metadata> =
  | ({
      readonly result: "success";
      readonly account: Account;
    } & AccountMetadata<KeyId, Metadata>)
  | {
      readonly keyId: Readonly<KeyId>;
      readonly result: "credentialError";
      readonly message?: string;
    }
  | { readonly keyId: Readonly<KeyId>; readonly result: "keyNotFound" }
  | {
      readonly keyId: Readonly<KeyId>;
      readonly result: "error";
      readonly message?: string;
    };

export interface KeyStore<KeyId, Metadata = undefined> {
  list(): AsyncIterable<AccountMetadata<KeyId, Metadata>>;
  get(keyId: Readonly<KeyId>): Promise<AccountRetrieval<KeyId, Metadata>>;
}

export type AccountGeneration<KeyId> =
  | { readonly result: "success"; readonly keyId: Readonly<KeyId> }
  | { readonly result: "error"; readonly message?: string };

export type AccountDeletion<KeyId> =
  | { readonly result: "success"; readonly keyId: Readonly<KeyId> }
  | { readonly result: "error"; readonly message?: string };

export interface MutableKeyStore<KeyId, Metadata = undefined>
  extends KeyStore<KeyId, Metadata> {
  generate(metadata?: Partial<Metadata>): Promise<AccountGeneration<KeyId>>;
  delete(keyId: Readonly<KeyId>): Promise<AccountDeletion<KeyId>>;
}

export type AccountImportation<KeyId> =
  | { readonly result: "success"; readonly keyId: KeyId }
  | { readonly result: "error"; readonly message?: string };

export interface ImportableKeyStore<KeyId, Metadata = undefined>
  extends MutableKeyStore<KeyId, Metadata> {
  import(
    privateKey: RawPrivateKey,
    metadata?: Partial<Metadata>,
  ): Promise<AccountImportation<KeyId>>;
}
