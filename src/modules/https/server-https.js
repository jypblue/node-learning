'use strict';
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../../cert/chyingp-key.pem'),
  cert: fs.readFileSynczhi('../../cert/chyingp-cert.pem'),
}
;
const server = https.createServer(options, res => {
  res.end('这是来自HTTPS服务器的返回');
});

server.listen(3000);
