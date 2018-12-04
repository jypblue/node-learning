'use strict';

const crypto = require('crypto');
const fs = require('fs');

const secret = 'secret';
const hmac = crypto.createHmac('sha256', secret);
const input = fs.createReadStream(__dirname + '/test.txt', { encoding: 'utf8' });
hmac.setEncoding('hex');

input.pipe(hmac).pipe(process.stdout);
