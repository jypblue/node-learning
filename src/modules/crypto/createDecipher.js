'use strict';
// 解密
const crypto = require('crypto');
const secret = 'secret';

const cipher = crypto.createCipher('aes192', secret);
const content = 'hello';
cipher.update(content);
const cryptedContent = cipher.final('hex');
console.log(cryptedContent);

const decipher = crypto.createDecipher('aes192', secret);
decipher.update(cryptedContent, 'hex');
const decryptedContent = decipher.final('utf8');
console.log(decryptedContent);
