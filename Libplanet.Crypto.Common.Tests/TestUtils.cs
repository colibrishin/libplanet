using System.Collections.Immutable;
using System.Linq;
using System.Text;
using Libplanet.Crypto.Common.Utils;
using Xunit;
using Xunit.Sdk;

namespace Libplanet.Crypto.Common.Tests;

public class TestUtils
{
    public static void AssertBytesEqual(byte[] expected, byte[] actual)
        {
            if (expected is null)
            {
                Assert.Null(actual);
                return;
            }

            Assert.NotNull(actual);

            string msg;
            if (expected.LongLength < 1024 && actual.LongLength < 1024 &&
                expected.All(b => b < 0x80) && actual.All(b => b < 0x80))
            {
                // If both arrays can be ASCII encoding, print them directly.
                string expectedStr = Encoding.ASCII.GetString(expected);
                string actualStr = Encoding.ASCII.GetString(actual);
                msg = $@"Two byte arrays do not equal
Expected length: ({expected.LongLength}) {expectedStr}
Actual length:   ({actual.LongLength}) {actualStr}";
            }
            else
            {
                string expectedRepr = Repr(expected);
                string actualRepr = Repr(actual);
                msg = $@"Two byte arrays do not equal
Expected (C# array lit): new byte[{expected.LongLength}] {{ {expectedRepr} }}
Actual (C# array lit):   new byte[{actual.LongLength}] {{ {actualRepr} }}";
            }

            if (!expected.SequenceEqual(actual))
            {
                throw new AssertActualExpectedException(
                    ByteUtil.Hex(expected),
                    ByteUtil.Hex(actual),
                    msg,
                    "Expected (hex)",
                    "Actual (hex)"
                );
            }

            string Repr(byte[] bytes)
            {
                const int limit = 1024;
                if (bytes.LongLength > limit)
                {
                    bytes = bytes.Take(limit).ToArray();
                }

                string s = string.Join(
                    ", ",
                    bytes.Select(b => b < 0x10 ? $"0x0{b:x}" : $"0x{b:x}")
                );
                return bytes.LongLength > limit ? $"{s}, ..." : s;
            }
        }

        public static void AssertBytesEqual(
            ImmutableArray<byte> expected,
            ImmutableArray<byte> actual
        ) =>
            AssertBytesEqual(expected.ToArray(), actual.ToArray());

        public static void AssertBytesEqual(
            ImmutableArray<byte>? expected,
            ImmutableArray<byte>? actual
        ) =>
            AssertBytesEqual(expected?.ToArray(), actual?.ToArray());
}
