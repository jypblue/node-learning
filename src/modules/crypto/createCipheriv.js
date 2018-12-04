'use strict';

// 加密
const crypto = require('crypto');
const key = crypto.randomBytes(192 / 8);
const iv = crypto.randomBytes(128 / 8);
const algorithm = 'aes192';

const encrypt = text => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  cipher.update(text);
  return cipher.final('hex');
};

const decrypt = encrypted => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.update(encrypted, 'hex');
  return decipher.final('utf8');
};

const content = 'hello';
const crypted = encrypt(content);
console.log(crypted);
const decrypted = decrypt(crypted);
console.log(decrypted);
