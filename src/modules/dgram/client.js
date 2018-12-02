'use strict';

const PORT = 33333;
const HOST = '127.0.0.1';

const dgram = require('dgram');
const message = Buffer.from('HELLO WORLD');
const client = dgram.createSocket('udp4');

client.send(message, PORT, HOST, (error, bytes) => {
  if (error) throw error;
  console.log('UDP message sent to ' + HOST + ':' + PORT);
  console.log(bytes);
  client.close();
});
