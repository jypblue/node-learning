// fs.readdirSync只读一层结构
'use strict';
const fs = require('fs');
const path = require('path');

const getFilesInDir = dir => {
  let results = [ path.resolve(dir) ];
  const files = fs.readdirSync(dir, 'utf8');

  files.forEach(file => {
    file = path.resolve(dir, file);
    const stats = fs.statSync(file);
    if (stats.isFile()) {
      results.push(file);
    } else if (stats.isDirectory()) {
      results = results.concat(getFilesInDir(file));
    }
  });
  return results;
};

const files = getFilesInDir(path.resolve(__dirname, '../'));
console.log(files);
