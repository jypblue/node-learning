'use strict';

const fork = require('child_process').fork;

fork(__dirname + '/file/child.js', {
  silent: false,
});

fork(__dirname + '/file/silentChild.js', {
  silent: true,
});
const child = fork(__dirname + '/file/antherSilentChild.js', {
  silent: true,
});

child.stdout.setEncoding('utf8');
child.stdout.on('data', data => {
  console.log(data);
});
