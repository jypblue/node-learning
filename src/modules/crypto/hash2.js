'use strict';

const crypto = require('crypto');
const fs = require('fs');
const input = fs.createReadStream(__dirname + '/test.txt', { encoding: 'utf8' });
const hash = crypto.createHash('sha256');
hash.setEncoding('hex');

input.pipe(hash).pipe(process.stdout);

