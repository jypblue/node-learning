'use strict';
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url);
  const query = urlObj.query;
  const queryObj = querystring.parse(query);
  console.log(JSON.stringify(queryObj));
  res.end('ok');
});

server.listen(3000)
;
