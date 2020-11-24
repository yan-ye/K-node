#!/usr/bin/env node
const { program } = require('commander')
//-v
program.version(require('../package.json').version)


//解析参数
program.parse(process.argv)





