'use strict';

//
const arr = [ 0x62, 0x75, 0x66, 0x66, 0x65, 0x72 ];
const buf = new Buffer(arr);
console.log(buf.toString());
const array = 'buffer'.split('').map(v => {
  return '0x' + v.charCodeAt(0).toString(16);
});

console.log(array.join());

// 比较

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ADEF');
const flag1 = buf1.equals(buf2);
const flag2 = buf1.compare(buf2);
const flag3 = buf2.compare(buf3);
console.log(flag1);
console.log(flag2);
console.log(flag3);
const bufArr = [ buf1, buf2, buf3 ];
console.log(bufArr.sort(Buffer.compare).toString());
