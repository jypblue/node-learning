const http = require('http');
const zlib = require('zlib');

const resText = 'hello world';

const server = http.createServer((req, res)=>{
  const acceptEncoding = req.headers['accept-encoding'];
  if(acceptEncoding.indexOf('gzip') !== -1) {
    res.writeHead(200,{
      'content-encoding': 'gzip'
    });
    res.end(zlib.gzipSync(resText));
  } else {
    res.end(resText);
  }
});

server.listen('8080');
console.log('listen in: 127.0.0.1:8080')