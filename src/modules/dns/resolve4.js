'use strict';
const dns = require('dns');

dns.resolve4('h5.yit.com', function(err, address) {
  if (err) throw err;
  console.log(JSON.stringify(address));
})
;
