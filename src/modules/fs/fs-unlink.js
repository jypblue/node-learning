'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForWrite1.txt');

fs.unlink(filePath, err => {
  if (err) throw err;
  console.log('文件删除成功');
});

fs.unlinkSync(filePath);
