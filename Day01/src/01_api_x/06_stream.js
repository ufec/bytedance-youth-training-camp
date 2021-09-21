// stream 流
const fs = require('fs');

// 读 流
const rs = fs.createReadStream('./1.jpg');
// 写 流
const ws = fs.createWriteStream('./2.jpg');

// 读入的流(rs) 通过管道(pipe) “流入到” 写文件流(ws)
rs.pipe(ws);