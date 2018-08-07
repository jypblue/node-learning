const http = require('http');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const fileInPath = path.resolve(__dirname, './files/fileForGzip.html');

const server = http.createServer((req,res)=>{

  const acceptEncoding = req.headers['accept-encoding'];
  let gzip;

  if(acceptEncoding.indexOf('gzip') !==-1) {
    gzip = zlib.createGzip();
    res.writeHead(200,{
      'Content-Encoding': 'gzip'
    });
    fs.createReadStream(fileInPath).pipe(gzip).pipe(res);
  } else {
    fs.createReadStream(fileInPath).pipe(res);
  }

});

server.listen('8080');
console.log('listen to: 127.0.0.1:8080');

