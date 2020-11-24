#!/usr/bin/env node
const { program } = require('commander')
//-v
program.version(require('../package.json').version)

program
    .command('init <name>')
    .description('初始化项目')
    .action(() =>{
        console.log('hi .....');
    })


//解析参数
program.parse(process.argv)





