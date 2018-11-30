'use strict';

const https = require('https');

https.get('https://www.baidu.com', res => {
  console.log('status code:' + res.statusCode);
  console.log('headers:' + JSON.stringify(res.headers));
  res.on('data', data => {
    process.stdout.write(data);
  });
}).on('error', err => {
  console.error(err);
})
;
