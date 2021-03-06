'use strict';

const net = require('net');
const PORT = 3000;
const HOST = '127.0.0.1';

const server = net.createServer(socket => {
  console.log('服务端：收到来自客户端的请求');
  socket.on('data', data => {
    console.log('服务端：收到客户端数据，内容为{' + data + '}');
    socket.write('你好，我是服务端');
  });
  socket.on('close', () => {
    console.log('服务端：客户端链接断开');
  });
});

server.listen(PORT, HOST, () => {
  console.log('服务端：开始监听来自客户端的请求');
});

