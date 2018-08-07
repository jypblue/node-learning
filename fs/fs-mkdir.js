const fs = require('fs');
const path = require('path');
const folderPath = path.resolve(__dirname, './hello')
fs.mkdir(folderPath, (err)=>{
  if(err) throw err;
  console.log('目录创建成果')
})

fs.mkdirSync(path.resolve(__dirname, './hello2'))