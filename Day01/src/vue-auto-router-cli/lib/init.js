// 欢迎界面
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const { clone } = require('./download');
const log = content => console.log(chalk.green(content));
const spawn = async (...args) => {
    const options = args[args.length - 1];
    if(process.platform === 'win32') {
        options.shell = true;
    }
    const { spawn } = require('child_process');
    return new Promise((resolve, reject) => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve();
        });
        proc.on('error', (err) => {
            reject(err);
        })
    });
}; 

module.exports = async ({name, owner, path}) => {
    // 打印欢迎界面
    clear();
    const data = await figlet('ByteDance Younth Camp');
    log(data);

    // 项目模板
    log("🚀创建项目：" + name);
    let repo = owner ? `${owner}/${name}}` : `ufec/${name}`;
    await clone(repo, path || name);

    log("🚗安装依赖....");
    await spawn("npm", ['install'], { cwd: `./${name}`, stdio: 'pipe' });
    log(chalk.green(`
👌安装完成：
To get start:
=======================
    cd ${name}
    npm run server
=======================
    `));
}