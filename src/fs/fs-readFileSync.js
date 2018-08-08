
'use strict';
const fs = require('fs');
const path = require('path');

let data;
const filePath = path.resolve(__dirname, './files/fileForRead.txt');

try {
  data = fs.readFileSync(filePath, 'utf8');
  console.log('文件内容：\n', data);
} catch (error) {
  console.error('读取文件失败：\n', error.message);
}
