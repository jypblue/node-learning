'use strict';
const crypto = require('crypto');
const fs = require('fs');

const content = fs.readFileSync(__dirname + '/test.txt', { encoding: 'utf8' });
const hash = crypto.createHash('sha256');
hash.update(content);
const output = hash.digest('hex');
console.log(output);

