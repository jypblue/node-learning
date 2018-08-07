const fs = require('fs');
const path = require('path');

const outFilePath = path.resolve(__dirname, './files/fileForWrite.txt')

fs.writeFile(outFilePath, 'hello world', 'utf8',(err)=>{
  if(err) throw err;
  console.log('文件写入成功');
})