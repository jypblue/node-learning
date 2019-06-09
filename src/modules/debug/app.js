const nick = 'chiingp';
const country = 'china';
const str = nick + 'live in ' + country;
const logger = function(msg) {
  console.log(msg);
  console.log('这行会跳过')
}

logger(str);

console.log(str)