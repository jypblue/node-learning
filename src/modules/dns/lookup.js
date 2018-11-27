'use strict';

const dns = require('dns');
const options = { all: true };
dns.lookup('www.yit.com', options, function(err, address) {
  if (err) throw err;
  console.log('yit:', address);
});
