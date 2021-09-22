const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const fs = require('fs');

module.exports.clone = async (repo, path) => {
    if (repo.split('/').length < 2) {
        throw Error(`仓库 ${repo} 格式有误，请输入格式 owner/repoName `);
    }
    if (fs.existsSync(path)) {
        throw Error(`目录 ${path} 已经存在`);
    }
    let dest = path || repo.split('/')[1];
    await download(repo, dest);
    console.log("Clone Success");
}