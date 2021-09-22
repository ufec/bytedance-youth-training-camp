const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

/**
 * 
 * @param {*} dir 扫描目录 
 * @param {*} cb 回调函数
 */
function load(dir, cb) {
    const url = path.resolve(__dirname, dir);
    const fileList = fs.readdirSync(url);
    fileList.forEach(filename => {
        filename = filename.replace('.js', '');
        const file = require(`${url}/${filename}`);
        cb(filename, file);
    });
}

/**
 * 
 * @param {*} config 配置文件
 * @returns app()
 */
const loadModel = config => app => {
    mongoose.connect(config.db.url, config.db.options);
    const connection = mongoose.connection;
    connection.on('error', () => { console.error("数据库连接失败！") });
    app.$model = {};
    load("../model", (filename, { schema }) => {
        console.log('load model: ', filename, schema);
        app.$model[filename] = mongoose.model(filename, schema);
    });
}

module.exports = {
    loadModel,
}