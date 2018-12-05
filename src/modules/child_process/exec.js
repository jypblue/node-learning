'use strict';

const exec = require('child_process').exec;

exec('ls -al', (error, stdout, stderr) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  console.log('stdout:', stdout);
  console.log('stderr:', typeof stderr);
});

exec('ls hello.txt', (error, stdout, stderr) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  console.log('stdout:' + stdout);
  console.log('stderr:' + stderr);
});
