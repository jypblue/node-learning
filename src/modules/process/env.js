'use strict';
// NODE_ENV
switch (process.env.NODE_ENV) {
  case 'production':
    console.log('生产环境');
    break;
  default:
    console.log('非生产环境');
    break;
}

