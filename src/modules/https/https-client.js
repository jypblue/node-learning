'use strict';
const https = require('https');

https.get('https://kyfw.12306.cn/otn/regist/init', res => {
  res.on('data', data => {
    process.stdout.write(data);
  });
}).on('error', err => {
  console.error(err);
});
