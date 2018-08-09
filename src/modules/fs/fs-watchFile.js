'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, './files/fileForWatch.txt');
const options = {
  persistent: true,
  interval: 2000,
};

fs.watchFile(filePath, options, (curr, prev) => {
  console.log('修改时间为： ', curr.mtime);
});
