'use strict';

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('ok');
});

server.on('connect', (req, socket) => {
  console.log('connect 事件触发了');
  socket.end();
});

server.listen(PORT);
