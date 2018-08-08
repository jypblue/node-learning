// 是否是真实路径
'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, './files/fileForReadLink.txt');
const randomFileName = path.resolve(__dirname, './files/fileForReadLink2666.txt');

fs.realpath(filePath, (err, resolvedPath) => {
  if (err) throw err;
  console.log('realpath:', resolvedPath);
});
fs.realpath(randomFileName, (err, resolvedPath) => {
  if (err) throw err;
  console.log('realpath:', resolvedPath);
});

console.log('path.resolve', path.resolve(__dirname, './files/fileForReadLink2666.txt'))
;
