'use strict';
process.execArgv.forEach((val, index, array) => {
  console.log(index + ':' + val);
});

