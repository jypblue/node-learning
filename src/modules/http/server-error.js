'use strict';

const http = require('http');
const PORT = 3000;
const noop = function() {};

const svr = http.createServer(noop);
const anotherSvr = http.createServer(noop);

anotherSvr.on('error', event => {
  console.error('出错啦！' + event.message);
});

svr.listen(PORT, () => {
  anotherSvr.listen(PORT);
});
