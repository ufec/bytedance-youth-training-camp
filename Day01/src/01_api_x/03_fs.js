const fs = require('fs');
// 同步读取
const data = fs.readFileSync("./conf.js");
console.log("同步读取：", data.toString());

// 异步读取（回调函数）
fs.readFile("./conf.js", (err, data) => {
    if(err) {
        throw Error(err);
    }
    console.log('异步读取：', data.toString());
});

// fs内置promises
const fs_promise = require('fs').promises;
(async () => {
    const data = await fs_promise.readFile("./conf.js");
    console.log("fs内置promises风格读取：", data.toString());
})();

// 与上面等效
const fs_promises = require('fs/promises');

(async () => {
    const data = await fs_promises.readFile("./conf.js");
    console.log("fs/promises 读取", data.toString());
})();

// util 内置 promisify
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

(async () => {
    let data = null;
    try {
        data = await readFile("./conf1.js");
        data = data.toString();
    } catch (error) {
        throw Error("Can not open file", error);
    }
    console.log("util 内置 promisify：", data);
})();