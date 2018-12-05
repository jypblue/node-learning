'use strict';

const fork = require('child_process').fork;
const child = fork(__dirname + '/child.js');

child.on('message', m => {
  console.log('message from child: ' + JSON.stringify(m));
});

child.send({ from: 'parent' });
