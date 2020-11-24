const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('../lib/download')
const path = require('path')
const { resolve } = require('path')
const open = require('open')

//封装好看的log
const log = content => console.log(chalk.redBright(content));


module.exports = async name => {
    //清空控制台
    clear()
    //terminal显示的信息
    let termimalStr = await figlet('welcom terminal')
    //打印信息
    log(termimalStr)
    //克隆项目
    await clone('github:yan-ye/s', name)
    //安装依赖
    log('开始安装依赖')
    await spawn('npm',['install'], {cwd: `./${name}`})
    //依赖安装完成打印牛逼的log
    log(
        `
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

安装已完成 🛫️ 起飞～

🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
        `
    )

    //打开浏览器
    open('http://localhost:8080/')
    await spawn('npm',['run','serve'],{cwd: `./${name}`})
   

}


function spawn(...argv) {
    const { spawn } = require('child_process')
    const proc = spawn(...argv)
    return new Promise(resolve => {
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () =>{
            resolve()
        })
    })
}