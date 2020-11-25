const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')

module.exports = async () =>{
    //获取页面列表
    const list = fs.readdirSync('./src/views')
                .filter(file => file !== 'Home.vue')
                .map( v => ({
                    name: v.replace('.vue', '').toLowerCase(),
                    file: v
                }))

    // 生成路由定义
    compiler({list}, './src/router/index.js','')


    /**
     * 编译模板文件
     * @param {*} meta 数据定义
     * @param {*} filePath 目标文件路径
     * @param {*} templatePaht 模板  文件路径
     */
    function compiler(meta, filePath, templatePaht) {
        if (fs.existsSync(templatePaht)) {
            const content = fs.readFileSync(templatePaht).toString()
            const result = handlebars.compile(content)(meta)
            fs.writeFileSync(filePath)
            console.log(chalk.greenBright(`🚀 ${filePath} 创建成功`));
        }
    }
}
