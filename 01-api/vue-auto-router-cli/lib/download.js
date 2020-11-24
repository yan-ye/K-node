const { promisify } = require('util')
const ora = require('ora')
const download = promisify(require('download-git-repo'))
exports.clone = async (repo, desc) => {
    //定义进度条
    const process = ora(`开始下载 ${repo}`)
    process.start()
    await download(repo,desc).then( resolve =>{
        console.log('success');
    }).catch(reject =>{
        console.error(reject ,'>>>>>')
    })
    process.succeed()
}