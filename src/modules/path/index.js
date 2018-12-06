'use strict';

const path = require('path');

const filePath = '/tmp/demo/test.js';

console.log('filePath:', path.dirname(filePath));
console.log('baseName:', path.basename(filePath));
console.log('extname:', path.extname(filePath));
console.log('join:', path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log('resolve:', path.resolve('/foo/bar', './baz'));
console.log('normalize:', path.normalize('/temp/demo//js/up/...'));
const obj = {
  dir: '/temp',
  name: 'hello',
  ext: '.js',
};
const formatPath = path.format(obj);
console.log('format:', formatPath);
console.log('parse:', path.parse(formatPath));
