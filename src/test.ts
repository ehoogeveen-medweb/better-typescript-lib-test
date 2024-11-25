import * as zlib from 'node:zlib'

const result = zlib.gzipSync("test");

console.log(result.byteLength);
