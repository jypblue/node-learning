'use strict';

const crypto = require('crypto');
const fs = require('fs');

const secret = 'secret';
const hmac = crypto.createHmac('sha256', secret);
const input = fs.readFileSync(__dirname + '/test.txt', { encoding: 'utf8' });
hmac.update(input);
console.log(hmac.digest('hex'));
