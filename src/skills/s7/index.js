'use strict';

/**
 * 7.基准测试
 * 对一个耗时的操作进行基准测试
 */
const fs = require('fs');

const args = {
  '-h': displayHelp,
  '-r': readFile,
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  if (file && file.length) {
    console.log('Reading:', file);
    console.time('read');
    const stream = fs.createReadStream(file);
    stream.on('end', function() {
      console.timeEnd('read');
    });
    stream.pipe(process.stdout);
  } else {
    console.error('A file must be provided with the -r option');
    process.exit(1);
  }
}

console.log(process.arch);
