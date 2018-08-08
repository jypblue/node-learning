// 文件权限
'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForChown.txt');

fs.writeFileSync(filePath);

fs.chmod(filePath, '777', err => {
  if (err) throw err;
  console.log('change success');
});

fs.chmodSync(filePath, '777');
