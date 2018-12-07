'use strict';

const crypto = require('crypto');
const md5 = crypto.createHash('md5');

const result = md5.update('a').digest('hex');
console.log(result);
