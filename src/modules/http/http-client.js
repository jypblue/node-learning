'use strict';

const http = require('http');
http.get('http://127.0.0.1:3000', res => {
  console.log(res.statusCode);
});

