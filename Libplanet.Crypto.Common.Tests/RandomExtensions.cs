using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;

namespace Libplanet.Crypto.Common.Tests
{
    public static class RandomExtensions
    {
        public static byte[] NextBytes(this Random random, int size)
        {
            var buffer = new byte[size];
            random.NextBytes(buffer);
            return buffer;
        }

        public static IOrderedEnumerable<T> Shuffle<T>(this Random random, IEnumerable<T> source) =>
            source.OrderBy(_ => random.Next());

        public static IOrderedEnumerable<T> Shuffle<T>(this IEnumerable<T> source, Random random) =>
            random.Shuffle(source);
    }
}
