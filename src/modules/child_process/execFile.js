'use strict';

const execFile = require('child_process').execFile;

execFile('node', [ '--version' ], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
  console.log(stderr);
});

// execFile('/Users/a/.nvm/versions/node/v9.11.2/bin/node', [ '--version' ], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
//   console.log(stderr);
// });
