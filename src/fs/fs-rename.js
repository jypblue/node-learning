'use strict';
const fs = require('fs');
const path = require('path');

const dir1Path = path.resolve(__dirname, './hello');
const dir2Path = path.resolve(__dirname, './world');


fs.rename(dir1Path, dir2Path, err => {
  if (err) throw err;
  console.log('rename success');
});

fs.renameSync(dir2Path, dir1Path);
