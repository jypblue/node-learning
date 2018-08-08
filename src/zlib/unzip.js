'use strict';

const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

const unzip = zlib.createGunzip();

const fileInPath = path.resolve(__dirname, './files/fileForCompress.txt.gz');
const fileOutPath = path.resolve(__dirname, './files/fileForCompress1.txt');

const file = fs.createReadStream(fileInPath);
const out = fs.createWriteStream(fileOutPath);

file.pipe(unzip).pipe(out);
