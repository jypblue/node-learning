'use strict';

const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const msg = Buffer.from('hello world');
const port = 33333;
const host = '255.255.255.255';

client.bind(() => {
  client.setBroadcast(true);
  client.send(msg, port, host, err => {
    if (err) throw err;
    console.log('msg has been sent');
    client.close();
  });
});
