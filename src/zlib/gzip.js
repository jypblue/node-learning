'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const fileInPath = path.resolve(__dirname, './files/fileForCompress.txt');
const fileOutPath = path.resolve(__dirname, './files/fileForCompress.txt.gz');

const gzip = zlib.createGzip();

const file = fs.createReadStream(fileInPath);
const out = fs.createWriteStream(fileOutPath);

file.pipe(gzip).pipe(out);
