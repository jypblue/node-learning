'use strict';
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, './hello2');

fs.rmdir(dir, err => {
  if (err) throw err;
  console.log('dir del success');
})
;
