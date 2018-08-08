'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForRead.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('读取文件出错:\n', err.message);
  }
  console.log('文件内容:\n', data);
});
