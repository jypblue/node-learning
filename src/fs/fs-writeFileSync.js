'use strict';

const fs = require('fs');
const path = require('path');

const outFilePath = path.resolve(__dirname, './files/fileForWrite1.txt');

try {
  fs.writeFileSync(outFilePath, 'hello world sync', 'utf8');
  console.log('写入成功');
} catch (error) {
  throw error;
}
