'use strict';
const cluster = require('cluster');
const cpuNums = require('os').cpus().length;
const http = require('http');

if (cluster.isMaster) {
  for (let i = 0; i < cpuNums; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end(`res from work ${process.pid}`);
  }).listen(3000);
  console.log(`worker ${process.pid} started`);
}

//  source modules/cluster/req.sh
