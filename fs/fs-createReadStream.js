const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForRead.txt');

const readStream = fs.createReadStream(filePath, 'utf8');

readStream.on('data',(chunk)=>{
  console.log('数据：\n',chunk);
}).on('error', (error)=>{
  console.error('出错：\n', error.message);
}).on('end', ()=>{
  console.log('没有数据了')
}).on('close', ()=>{
  console.log('已经关闭')
})