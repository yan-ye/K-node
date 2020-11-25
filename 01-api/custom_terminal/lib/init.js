const clear = require('clear')
const chalk = require('chalk')
const log = text => console.log(chalk.redBright(text));
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const { clone } = require('../lib/download')
const open = require('open')
const ora = require('ora')

module.exports = async name => {
    //clear 清空控制台
    clear()
    //生成欢迎信息
    let wstr = await figlet(`welcome ${name} terminal`)
    //控制台打印信息
    log(wstr)
    //下载模板
    await clone('github:yan-ye/s', name)
    //安装依赖
    let procc = ora('安装依赖').start()
    await spawn('npm', ['install'], { cwd: `./${name}` })
    procc.succeed() 
    log(`
====================   

依赖安装完成 🚀🚀

====================   
   `)

    //运行
    procc = ora('启动').start()
     //打开浏览器
    await open('http://localhost:8080')
    procc.succeed()
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
    
}

function spawn(...argv) {
    const { spawn } = require('child_process')
    const proc = spawn(...argv)
    return new Promise(resolve => {
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}

