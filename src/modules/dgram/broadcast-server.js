'use strict';
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const port = 33333;

server.on('message', (message, rinfo) => {
  console.log('server got message from: ' + rinfo.address + ':' + rinfo.port);
  console.log(message.toString('utf8'));
});

server.bind(port);
