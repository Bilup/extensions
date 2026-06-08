// Name: Encryption
// ID: encryption
// Description: Handling text encryption for different needs to keep data safe.
// By: DL_Grass <https://github.com/DLGrass>
// License: MIT

(function (Scratch) {
    'use strict';

    // 加密法(AI)
    function md5Hash(str) {
        function md5cycle(x, k) {
            var a = x[0], b = x[1], c = x[2], d = x[3];
            
            a = ff(a, b, c, d, k[0], 7, 0xd76aa478);
            d = ff(d, a, b, c, k[1], 12, 0xe8c7b756);
            c = ff(c, d, a, b, k[2], 17, 0x242070db);
            b = ff(b, c, d, a, k[3], 22, 0xc1bdceee);
            a = ff(a, b, c, d, k[4], 7, 0xf57c0faf);
            d = ff(d, a, b, c, k[5], 12, 0x4787c62a);
            c = ff(c, d, a, b, k[6], 17, 0xa8304613);
            b = ff(b, c, d, a, k[7], 22, 0xfd469501);
            a = ff(a, b, c, d, k[8], 7, 0x698098d8);
            d = ff(d, a, b, c, k[9], 12, 0x8b44f7af);
            c = ff(c, d, a, b, k[10], 17, 0xffff5bb1);
            b = ff(b, c, d, a, k[11], 22, 0x895cd7be);
            a = ff(a, b, c, d, k[12], 7, 0x6b901122);
            d = ff(d, a, b, c, k[13], 12, 0xfd987193);
            c = ff(c, d, a, b, k[14], 17, 0xa679438e);
            b = ff(b, c, d, a, k[15], 22, 0x49b40821);
            
            a = gg(a, b, c, d, k[1], 5, 0xf61e2562);
            d = gg(d, a, b, c, k[6], 9, 0xc040b340);
            c = gg(c, d, a, b, k[11], 14, 0x265e5a51);
            b = gg(b, c, d, a, k[0], 20, 0xe9b6c7aa);
            a = gg(a, b, c, d, k[5], 5, 0xd62f105d);
            d = gg(d, a, b, c, k[10], 9, 0x02441453);
            c = gg(c, d, a, b, k[15], 14, 0xd8a1e681);
            b = gg(b, c, d, a, k[4], 20, 0xe7d3fbc8);
            a = gg(a, b, c, d, k[9], 5, 0x21e1cde6);
            d = gg(d, a, b, c, k[14], 9, 0xc33707d6);
            c = gg(c, d, a, b, k[3], 14, 0xf4d50d87);
            b = gg(b, c, d, a, k[8], 20, 0x455a14ed);
            a = gg(a, b, c, d, k[13], 5, 0xa9e3e905);
            d = gg(d, a, b, c, k[2], 9, 0xfcefa3f8);
            c = gg(c, d, a, b, k[7], 14, 0x676f02d9);
            b = gg(b, c, d, a, k[12], 20, 0x8d2a4c8a);
            
            a = hh(a, b, c, d, k[5], 4, 0xfffa3942);
            d = hh(d, a, b, c, k[8], 11, 0x8771f681);
            c = hh(c, d, a, b, k[11], 16, 0x6d9d6122);
            b = hh(b, c, d, a, k[14], 23, 0xfde5380c);
            a = hh(a, b, c, d, k[1], 4, 0xa4beea44);
            d = hh(d, a, b, c, k[4], 11, 0x4bdecfa9);
            c = hh(c, d, a, b, k[7], 16, 0xf6bb4b60);
            b = hh(b, c, d, a, k[10], 23, 0xbebfbc70);
            a = hh(a, b, c, d, k[13], 4, 0x289b7ec6);
            d = hh(d, a, b, c, k[0], 11, 0xeaa127fa);
            c = hh(c, d, a, b, k[3], 16, 0xd4ef3085);
            b = hh(b, c, d, a, k[6], 23, 0x04881d05);
            a = hh(a, b, c, d, k[9], 4, 0xd9d4d039);
            d = hh(d, a, b, c, k[12], 11, 0xe6db99e5);
            c = hh(c, d, a, b, k[15], 16, 0x1fa27cf8);
            b = hh(b, c, d, a, k[2], 23, 0xc4ac5665);
            
            a = ii(a, b, c, d, k[0], 6, 0xf4292244);
            d = ii(d, a, b, c, k[7], 10, 0x432aff97);
            c = ii(c, d, a, b, k[14], 15, 0xab9423a7);
            b = ii(b, c, d, a, k[5], 21, 0xfc93a039);
            a = ii(a, b, c, d, k[12], 6, 0x655b59c3);
            d = ii(d, a, b, c, k[3], 10, 0x8f0ccc92);
            c = ii(c, d, a, b, k[10], 15, 0xffeff47d);
            b = ii(b, c, d, a, k[1], 21, 0x85845dd1);
            a = ii(a, b, c, d, k[8], 6, 0x6fa87e4f);
            d = ii(d, a, b, c, k[15], 10, 0xfe2ce6e0);
            c = ii(c, d, a, b, k[6], 15, 0xa3014314);
            b = ii(b, c, d, a, k[13], 21, 0x4e0811a1);
            a = ii(a, b, c, d, k[4], 6, 0xf7537e82);
            d = ii(d, a, b, c, k[11], 10, 0xbd3af235);
            c = ii(c, d, a, b, k[2], 15, 0x2ad7d2bb);
            b = ii(b, c, d, a, k[9], 21, 0xeb86d391);
            
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        }
        
        function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32((a << s) | (a >>> (32 - s)), b);
        }
        
        function ff(a, b, c, d, x, s, t) {
            return cmn((b & c) | (~b & d), a, b, x, s, t);
        }
        
        function gg(a, b, c, d, x, s, t) {
            return cmn((b & d) | (c & ~d), a, b, x, s, t);
        }
        
        function hh(a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        }
        
        function ii(a, b, c, d, x, s, t) {
            return cmn(c ^ (b | ~d), a, b, x, s, t);
        }
        
        function add32(a, b) {
            return (a + b) >>> 0;
        }
        
        var n = str.length,
            state = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476],
            i;
        
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(str.substring(i - 64, i)));
        }
        
        str = str.substring(i - 64);
        var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
        for (i = 0; i < str.length; i++) {
            tail[i >> 2] |= str.charCodeAt(i) << ((i % 4) << 3);
        }
        
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i++) tail[i] = 0;
        }
        
        tail[14] = n * 8;
        md5cycle(state, tail);
        
        const hex = '0123456789abcdef';
        const toHex = (val) => {
            let s = '';
            for (let i = 0; i < 4; i++) {
                s += hex[(val >>> (8 * i + 4)) & 0xF];
                s += hex[(val >>> (8 * i)) & 0xF];
            }
            return s;
        };
        
        return toHex(state[0]) + toHex(state[1]) + toHex(state[2]) + toHex(state[3]);
    }
    
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) +
                (s.charCodeAt(i + 1) << 8) +
                (s.charCodeAt(i + 2) << 16) +
                (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function sha256Hash(str) {
        var K = [
            0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
            0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
            0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
            0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
            0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
            0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
            0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
            0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
        ];
        
        var H0 = 0x6a09e667, H1 = 0xbb67ae85, H2 = 0x3c6ef372, H3 = 0xa54ff53a;
        var H4 = 0x510e527f, H5 = 0x9b05688c, H6 = 0x1f83d9ab, H7 = 0x5be0cd19;
        
        var msg = [];
        for (var i = 0; i < str.length; i++) {
            msg.push(str.charCodeAt(i));
        }
        
        var len = msg.length * 8;
        msg.push(0x80);
        
        while ((msg.length * 8) % 512 !== 448) {
            msg.push(0);
        }
        
        for (var i = 7; i >= 0; i--) {
            msg.push((len >>> (8 * i)) & 0xff);
        }
        
        for (var i = 0; i < msg.length; i += 64) {
            var W = [];
            for (var j = 0; j < 16; j++) {
                W[j] = (msg[i + j * 4] << 24) | (msg[i + j * 4 + 1] << 16) | (msg[i + j * 4 + 2] << 8) | msg[i + j * 4 + 3];
            }
            
            for (var j = 16; j < 64; j++) {
                var s0 = ((W[j - 15] >>> 7) | (W[j - 15] << 25)) ^ ((W[j - 15] >>> 18) | (W[j - 15] << 14)) ^ (W[j - 15] >>> 3);
                var s1 = ((W[j - 2] >>> 17) | (W[j - 2] << 15)) ^ ((W[j - 2] >>> 19) | (W[j - 2] << 13)) ^ (W[j - 2] >>> 10);
                W[j] = (W[j - 16] + s0 + W[j - 7] + s1) >>> 0;
            }
            
            var a = H0, b = H1, c = H2, d = H3, e = H4, f = H5, g = H6, h = H7;
            
            for (var j = 0; j < 64; j++) {
                var S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
                var ch = (e & f) ^ (~e & g);
                var t1 = (h + S1 + ch + K[j] + W[j]) >>> 0;
                var S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
                var maj = (a & b) ^ (a & c) ^ (b & c);
                var t2 = (S0 + maj) >>> 0;
                
                h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
            }
            
            H0 = (H0 + a) >>> 0;
            H1 = (H1 + b) >>> 0;
            H2 = (H2 + c) >>> 0;
            H3 = (H3 + d) >>> 0;
            H4 = (H4 + e) >>> 0;
            H5 = (H5 + f) >>> 0;
            H6 = (H6 + g) >>> 0;
            H7 = (H7 + h) >>> 0;
        }
        
        var hex = '';
        var [h] = [H0, H1, H2, H3, H4, H5, H6, H7];
        for (var i = 0; i < 8; i++) {
            hex += h[i].toString(16).padStart(8, '0');
        }
        return hex;
    }

    function sha512Hash(str) {
        var K = [
            0x428a2f98d728ae22, 0x7137449123ef65cd, 0xb5c0fbcfec4d3b2f, 0xe9b5dba58189dbbc,
            0x3956c25bf348b538, 0x59f111f1b605d019, 0x923f82a4af194f9b, 0xab1c5ed5da6d8118,
            0xd807aa98a3030242, 0x12835b0145706fbe, 0x243185be4ee4b28c, 0x550c7dc3d5ffb4e2,
            0x72be5d74f27b896f, 0x80deb1fe3b1696b1, 0x9bdc06a725c71235, 0xc19bf174cf692694,
            0xe49b69c19ef14ad2, 0xefbe4786384f25e3, 0x0fc19dc68b8cd5b5, 0x240ca1cc77ac9c65,
            0x2de92c6f592b0275, 0x4a7484aa6ea6e483, 0x5cb0a9dcbd41fbd4, 0x76f988da831153b5,
            0x983e5152ee66dfab, 0xa831c66d2db43210, 0xb00327c898fb213f, 0xbf597fc7beef0ee4,
            0xc6e00bf33da88fc2, 0xd5a79147930aa725, 0x06ca6351e003826f, 0x142929670a0e6e70,
            0x19a4c116b8d2d0c8, 0x1e376c085141ab53, 0x2748774cdf8eeb99, 0x34b0bcb5e19b48a8,
            0x391c0cb3c5c95a63, 0x4ed8aa4ae3418acb, 0x5b9cca4f7763e373, 0x682e6ff3d6b2b8a3,
            0x748f82ee5defb2fc, 0x78a5636f43172f60, 0x84c87814a1f0ab72, 0x8cc702081a6439ec,
            0x90befffa23631e28, 0xa4506cebde82bde9, 0xbef9a3f7b2c67915, 0xc67178f2e372532b,
            0xca273eceea26619c, 0xd186b8c721c0c207, 0xeada7dd6cde0eb1e, 0xf57d4f7fee6ed178,
            0x06f067aa72176fba, 0x0a637dc5a2c898a6, 0x113f9804bef90dae, 0x1b710b35131c471b,
            0x28db77f523047d84, 0x32caab7b40c72493, 0x3c9ebe0a15c9bebc, 0x431d67c49c100d4c,
            0x4cc5d4becb3e42b6, 0x597f299cfc657e2a, 0x5fcb6fab3ad6faec, 0x6c44198c4a475817
        ];
        
        var H = [
            0x6a09e667f3bcc908, 0xbb67ae8584caa73b, 0x3c6ef372fe94f82b, 0xa54ff53a5f1d36f1,
            0x510e527fade682d1, 0x9b05688c2b3e6c1f, 0x1f83d9abfb41bd6b, 0x5be0cd19137e2179
        ];
        
        function rotr64(n, x) { return (x >>> n) | (x << (64 - n)); }
        function add64(a, b) {
            var lo = (a & 0xFFFFFFFF) + (b & 0xFFFFFFFF);
            var hi = (a >>> 32) + (b >>> 32) + (lo >>> 32);
            return (hi << 32) | (lo & 0xFFFFFFFF);
        }
        
        var msg = [];
        for (var i = 0; i < str.length; i++) {
            msg.push(str.charCodeAt(i));
        }
        msg.push(0x80);
        
        while ((msg.length * 8) % 1024 !== 896) {
            msg.push(0);
        }
        
        var len = str.length * 8;
        for (var i = 0; i < 16; i++) {
            msg.push((len >> (8 * i)) & 0xFF);
        }
        
        for (var i = 0; i < msg.length; i += 128) {
            var M = [];
            for (var j = 0; j < 16; j++) {
                var w = 0;
                for (var k = 0; k < 8; k++) {
                    w |= msg[i + j * 8 + k] << (8 * k);
                }
                M[j] = w;
            }
            
            var W = [];
            for (var t = 0; t < 80; t++) {
                if (t < 16) {
                    W[t] = M[t];
                } else {
                    var s0 = rotr64(W[t - 15], 1) ^ rotr64(W[t - 15], 8) ^ (W[t - 15] >>> 7);
                    var s1 = rotr64(W[t - 2], 19) ^ rotr64(W[t - 2], 61) ^ (W[t - 2] >>> 6);
                    W[t] = add64(add64(add64(W[t - 16], s0), W[t - 7]), s1);
                }
            }
            
            var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
            
            for (var t = 0; t < 80; t++) {
                var S1 = rotr64(e, 14) ^ rotr64(e, 18) ^ rotr64(e, 41);
                var ch = (e & f) ^ (~e & g);
                var T1 = add64(add64(add64(add64(h, S1), ch), K[t]), W[t]);
                var S0 = rotr64(a, 28) ^ rotr64(a, 34) ^ rotr64(a, 39);
                var maj = (a & b) ^ (a & c) ^ (b & c);
                var T2 = add64(S0, maj);
                
                h = g; g = f; f = e; e = add64(d, T1); d = c; c = b; b = a; a = add64(T1, T2);
            }
            
            H[0] = add64(H[0], a);
            H[1] = add64(H[1], b);
            H[2] = add64(H[2], c);
            H[3] = add64(H[3], d);
            H[4] = add64(H[4], e);
            H[5] = add64(H[5], f);
            H[6] = add64(H[6], g);
            H[7] = add64(H[7], h);
        }
        
        var hex = '0123456789abcdef';
        var result = '';
        for (var i = 0; i < 8; i++) {
            for (var j = 15; j >= 0; j--) {
                result += hex[(H[i] >>> (4 * j)) & 0xF];
            }
        }
        return result;
    }

    function sha3Hash(str) {
        var rate = 1088;
        var capacity = 512;
        var outputLength = 256;
        var blockSize = rate / 8;
        
        var state = new Array(5);
        for (var i = 0; i < 5; i++) {
            state[i] = new Array(5);
            for (var j = 0; j < 5; j++) {
                state[i][j] = { lo: 0, hi: 0 };
            }
        }
        
        var RC = [
            { lo: 0x00000001, hi: 0x00000000 }, { lo: 0x80820000, hi: 0x00000000 },
            { lo: 0x808a0000, hi: 0x00000080 }, { lo: 0x80000000, hi: 0x80000000 },
            { lo: 0x808b0000, hi: 0x00000000 }, { lo: 0x00010000, hi: 0x00000080 },
            { lo: 0x80810000, hi: 0x00000080 }, { lo: 0x80090000, hi: 0x00000080 },
            { lo: 0x008a0000, hi: 0x00000000 }, { lo: 0x008b0000, hi: 0x00000000 },
            { lo: 0x80090000, hi: 0x00000080 }, { lo: 0x000a0000, hi: 0x00000080 },
            { lo: 0x808b0000, hi: 0x00000080 }, { lo: 0x008b0000, hi: 0x80000000 },
            { lo: 0x80890000, hi: 0x80000000 }, { lo: 0x80030000, hi: 0x80000000 },
            { lo: 0x80020000, hi: 0x80000000 }, { lo: 0x00800000, hi: 0x80000000 },
            { lo: 0x800a0000, hi: 0x00000000 }, { lo: 0x000a0000, hi: 0x80000080 },
            { lo: 0x80810000, hi: 0x80000080 }, { lo: 0x80800000, hi: 0x80000080 },
            { lo: 0x00010000, hi: 0x00000080 }, { lo: 0x80080000, hi: 0x80000080 }
        ];
        
        function xor64(a, b) {
            return { lo: a.lo ^ b.lo, hi: a.hi ^ b.hi };
        }
        
        function rol64(x, shift) {
            if (shift === 0) return x;
            if (shift < 32) {
                return {
                    lo: (x.lo << shift) | (x.hi >>> (32 - shift)),
                    hi: (x.hi << shift) | (x.lo >>> (32 - shift))
                };
            } else {
                shift -= 32;
                return {
                    lo: (x.hi << shift) | (x.lo >>> (32 - shift)),
                    hi: (x.lo << shift) | (x.hi >>> (32 - shift))
                };
            }
        }
        
        function keccakF() {
            for (var round = 0; round < 24; round++) {
                var C = new Array(5);
                for (var x = 0; x < 5; x++) {
                    C[x] = { lo: 0, hi: 0 };
                    for (var y = 0; y < 5; y++) {
                        C[x].lo ^= state[x][y].lo;
                        C[x].hi ^= state[x][y].hi;
                    }
                }
                
                var D = new Array(5);
                for (var x = 0; x < 5; x++) {
                    var tmp = rol64(C[(x + 1) % 5], 1);
                    D[x] = xor64(C[(x + 4) % 5], tmp);
                }
                
                for (var x = 0; x < 5; x++) {
                    for (var y = 0; y < 5; y++) {
                        state[x][y] = xor64(state[x][y], D[x]);
                    }
                }
                
                var x = 1, y = 0;
                var current = { lo: state[x][y].lo, hi: state[x][y].hi };
                var shifts = [1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21, 8, 18, 2, 61, 56, 14];
                for (var t = 0; t < 24; t++) {
                    var shift = shifts[t];
                    var nx = y, ny = (2 * x + 3 * y) % 5;
                    var temp = { lo: state[nx][ny].lo, hi: state[nx][ny].hi };
                    var rotated = rol64(current, shift);
                    state[nx][ny].lo = rotated.lo;
                    state[nx][ny].hi = rotated.hi;
                    current = temp;
                    x = nx; y = ny;
                }
                
                for (var y = 0; y < 5; y++) {
                    var row = new Array(5);
                    for (var x = 0; x < 5; x++) {
                        row[x] = { lo: state[x][y].lo, hi: state[x][y].hi };
                    }
                    for (var x = 0; x < 5; x++) {
                        var a = row[x];
                        var b = row[(x + 1) % 5];
                        var c = row[(x + 2) % 5];
                        state[x][y].lo = a.lo ^ ((~b.lo) & c.lo);
                        state[x][y].hi = a.hi ^ ((~b.hi) & c.hi);
                    }
                }
                
                state[0][0].lo ^= RC[round].lo;
                state[0][0].hi ^= RC[round].hi;
            }
        }
        
        var input = [];
        for (var i = 0; i < str.length; i++) {
            input.push(str.charCodeAt(i));
        }
        input.push(0x06);
        
        while (input.length % blockSize !== 0) {
            input.push(0);
        }
        
        for (var i = 0; i < input.length; i += blockSize) {
            for (var j = 0; j < blockSize; j += 8) {
                var lo = 0, hi = 0;
                for (var k = 0; k < 4; k++) {
                    lo |= input[i + j + k] << (8 * k);
                }
                for (var k = 4; k < 8; k++) {
                    hi |= input[i + j + k] << (8 * (k - 4));
                }
                var x = (j / 8) % 5;
                var y = Math.floor(j / 40);
                state[x][y].lo ^= lo;
                state[x][y].hi ^= hi;
            }
            keccakF();
        }
        
        var output = [];
        var pos = 0;
        while (pos < outputLength / 8) {
            for (var y = 0; y < 5 && pos < outputLength / 8; y++) {
                for (var x = 0; x < 5 && pos < outputLength / 8; x++) {
                    let lo = state[x][y].lo;
                    let hi = state[x][y].hi;
                    for (var k = 0; k < 4 && pos < outputLength / 8; k++) {
                        output.push((lo >> (8 * k)) & 0xFF);
                        pos++;
                    }
                    for (var k = 0; k < 4 && pos < outputLength / 8; k++) {
                        output.push((hi >> (8 * k)) & 0xFF);
                        pos++;
                    }
                }
            }
            if (pos < outputLength / 8) {
                keccakF();
            }
        }
        
        var hex = '0123456789abcdef';
        var result = '';
        for (var i = 0; i < output.length; i++) {
            result += hex[(output[i] >> 4) & 0xF];
            result += hex[output[i] & 0xF];
        }
        return result;
    }

    class Encryption {
        constructor(runtime) {
            this.runtime = runtime;
        }

        getInfo() {
            return {
                id: 'encryption',
                name: Scratch.translate({ default: 'Encryption', id: 'extensionName' }),
                color1: '#36fc61',
                color2: '#30e448',
                color3: '#28a14c',
                description: Scratch.translate({ default: 'Handling text encryption for different needs to keep data safe.', id: 'extensionDescription' }),

                blocks: [
                    { blockType: Scratch.BlockType.LABEL, text: Scratch.translate({ default: 'Base Encryption', id: 'group.base' }) },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'base64',
                        text: Scratch.translate({ default: 'base64 [Type] [Str]', id: 'block.base64' }),
                        arguments: {
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstType',
                            },
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'base32',
                        text: Scratch.translate({ default: 'base32 [Type] [Str]', id: 'block.base32' }),
                        arguments: {
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstType',
                            },
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'base16',
                        text: Scratch.translate({ default: 'base16 [Type] [Str]', id: 'block.base16' }),
                        arguments: {
                            Type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'ConstType',
                            },
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },

                    { blockType: Scratch.BlockType.LABEL, text: Scratch.translate({ default: 'MD5 Encryption', id: 'group.md5' }) },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'md5_32',
                        text: Scratch.translate({ default: 'MD5 encrypt 32bit [Str]', id: 'block.md5_32' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'md5_16',
                        text: Scratch.translate({ default: 'MD5 encrypt 16bit [Str]', id: 'block.md5_16' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                    { blockType: Scratch.BlockType.LABEL, text: Scratch.translate({ default: 'SHA Encryption', id: 'group.sha' }) },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'sha_256',
                        text: Scratch.translate({ default: 'SHA256 encrypt [Str]', id: 'block.sha_256' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'sha_512',
                        text: Scratch.translate({ default: 'SHA512 encrypt [Str]', id: 'block.sha_512' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'sha_3',
                        text: Scratch.translate({ default: 'SHA3 encrypt [Str]', id: 'block.sha_3' }),
                        arguments: {
                            Str: {
                                type: Scratch.ArgumentType.STRING,
                            }
                        },
                        
                    },
                ],

                menus: {
                    ConstType: [
                        { text: Scratch.translate({ default: 'Encrypt', id: 'menu.encrypt' }), value: 'encrypt' },
                        { text: Scratch.translate({ default: 'Decode', id: 'menu.decode' }), value: 'decode' },
                    ],
                }
            };
        }

        base64(args) {
            const { Type, Str } = args;
            const str = Str.toString();
            if (Type === 'encrypt') {
                return btoa(unescape(encodeURIComponent(str)));
            } else {
                try {
                    return decodeURIComponent(escape(atob(str)));
                } catch (e) {
                    return '';
                }
            }
        }

        base32(args) {
            const { Type, Str } = args;
            const str = Str.toString();
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
            if (Type === 'encrypt') {
                let bits = '';
                const bytes = new Uint8Array(encodeURIComponent(str).split('%').map((h, i) => i === 0 ? h.charCodeAt(0) : parseInt(h, 16)).filter(v => v !== undefined));
                bytes.forEach(byte => {
                    bits += byte.toString(2).padStart(8, '0');
                });
                let result = '';
                for (let i = 0; i < bits.length; i += 5) {
                    const chunk = bits.substring(i, i + 5).padEnd(5, '0');
                    result += alphabet[parseInt(chunk, 2)];
                }
                const padding = Math.ceil(result.length / 8) * 8 - result.length;
                return result + '='.repeat(padding);
            } else {
                try {
                    const cleaned = str.replace(/=+$/, '');
                    let bits = '';
                    for (let i = 0; i < cleaned.length; i++) {
                        const idx = alphabet.indexOf(cleaned[i].toUpperCase());
                        if (idx === -1) return '';
                        bits += idx.toString(2).padStart(5, '0');
                    }
                    let result = '';
                    for (let i = 0; i < bits.length; i += 8) {
                        const byte = bits.substring(i, i + 8);
                        if (byte.length === 8) {
                            result += String.fromCharCode(parseInt(byte, 2));
                        }
                    }
                    return decodeURIComponent(escape(result));
                } catch (e) {
                    return '';
                }
            }
        }
        
        base16(args) {
            const { Type, Str } = args;
            const str = Str.toString();
            if (Type === 'encrypt') {
                let result = '';
                for (let i = 0; i < str.length; i++) {
                    result += str.charCodeAt(i).toString(16).padStart(2, '0');
                }
                return result;
            } else {
                try {
                    let result = '';
                    const cleaned = str.replace(/[^0-9a-fA-F]/g, '');
                    for (let i = 0; i < cleaned.length; i += 2) {
                        result += String.fromCharCode(parseInt(cleaned.substring(i, i + 2), 16));
                    }
                    return result;
                } catch (e) {
                    return '';
                }
            }
        }

        md5_32(args) {
            const { Str } = args;
            const str = Str.toString();
            return md5Hash(str);
        }
        md5_16(args) {
            const { Str } = args;
            const str = Str.toString();
            const md5_32 = md5Hash(str);
            return md5_32.substring(8, 24);
        }
        sha_256(args) {
            const { Str } = args;
            const str = Str.toString();
            return sha256Hash(str);
        }
        sha_512(args) {
            const { Str } = args;
            const str = Str.toString();
            return sha512Hash(str);
        }
        sha_3(args) {
            const { Str } = args;
            const str = Str.toString();
            return sha3Hash(str);
        }
    }

    Scratch.extensions.register(new Encryption());

})(Scratch);