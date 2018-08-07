const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './files/fileForWrite1.txt');

const writeStream = fs.createWriteStream(filePath, 'utf8');

writeStream.on('close',()=>{
  console.log('已经关闭');
})

writeStream.write('hello');
writeStream.write('hello');
writeStream.end('');