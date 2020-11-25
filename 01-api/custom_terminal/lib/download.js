const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const ora = require('ora')
const chalk = require('chalk')
const log = text => console.log(chalk.yellowBright(text));
exports.clone = async (repo, desc) =>{
    const process = ora(`下载>> ${repo}`)
    process.start()
    try {
        await download(repo, desc)
    } catch (error) {
        log(error)
    }
    process.succeed()
}
