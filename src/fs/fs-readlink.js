// 软链接
'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, './files/fileForReadLink.txt');
const randomFileName = path.resolve(__dirname, './files/fileForReadLink-' + String(Math.random()).slice(2, 6) + '.txt');

fs.symlinkSync(filePath, randomFileName);
fs.readlink(randomFileName, 'utf8', (err, linkString) => {
  if (err) throw err;
  console.log('link content:', linkString);
});
