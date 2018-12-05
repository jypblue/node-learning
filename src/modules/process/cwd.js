'use strict';
console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/net');
  console.log('New directory: ' + process.cwd());
} catch (error) {
  console.log('chdir:' + error);
}
