// 分配10字节的内存空间
const buf1 = Buffer.alloc(10);

// 将 a的16进制ASCII码 存储为buffer 占一个字节
const buf2 = Buffer.from('a');
console.log(buf2);

// 将 中 的utf-8编码存储为buffer，占三个字节
const buf3 = Buffer.from('中')
console.log(buf3);

const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4, buf4.toString());