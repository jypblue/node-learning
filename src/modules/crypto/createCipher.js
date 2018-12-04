'use strict';
// 加密
const crypto = require('crypto');
const secret = 'secret';

const cipher = crypto.createCipher('aes192', secret);
const content = 'hello';
cipher.update(content);
const cryptedContent = cipher.final('hex');
console.log(cryptedContent);
