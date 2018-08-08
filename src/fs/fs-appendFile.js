// 添加内容
'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForWrite.txt');

fs.appendFile(filePath, ' hehehe ', 'utf8', err => {
  if (err) throw err;
  console.log('append success');
});
