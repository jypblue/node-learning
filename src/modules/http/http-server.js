'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  // const url = req.url;
  console.log('1、客户端请求url：' + req.url);
  console.log('2、http版本：' + req.httpVersion);
  console.log('3、http请求方法：' + req.method);
  console.log('4、http请求头部' + JSON.stringify(req.headers));
  res.end('ok');
});

server.listen(3000);
