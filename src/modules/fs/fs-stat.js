
// 文件状态
'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForStat.txt');
const getTimeDesc = d => {
  return [ d.getFullYear(), d.getMonth() + 1, d.getDate() ].join('-') + ' ' +
  [ d.getHours(), d.getMinutes(), d.getSeconds() ].join(':');
};

fs.stat(filePath, (err, stats) => {
  if (err) throw err;
  console.log('size:', stats.size);
  console.log('create time:', getTimeDesc(stats.birthtime));
  console.log('atime:', getTimeDesc(stats.atime));
  console.log('mtime:', getTimeDesc(stats.mtime));
});

const stats = fs.statSync(filePath);
console.log('size:', stats.size);
console.log('create time:', getTimeDesc(stats.birthtime));
console.log('atime:', getTimeDesc(stats.atime));
console.log('mtime:', getTimeDesc(stats.mtime));
