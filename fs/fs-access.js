// 验证文件是否存在
const fs = require('fs');
const path = require('path');

const file1Path = path.resolve(__dirname, './files/fileForRead.txt');
const file2Path = path.resolve(__dirname, './files/fileForRead2.txt');

fs.access(file1Path, (err)=>{
  if(err) {
    throw err;
  }
  console.log('fileForRead.txt存在')
})


fs.access(file2Path, (err)=>{
  if(err) {
    throw err;
  }
  console.log('fileForRead2.txt存在')
})