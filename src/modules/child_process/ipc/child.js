'use strict';

process.on('message', m => {
  console.log('message from parent: ' + JSON.stringify(m));
});

process.send({ from: 'child' });
