// const hello = 'hello world'

// module.exports = { hello }
const path = require('path')
const fs = require('fs')
module.exports = class TestNow {
    getTestFileName (dir) {
        let dirName = path.dirname(dir)
        let baseName = path.basename(dir)
        let extName = path.extname(dir)
        let testName = baseName.replace(extName,`.spec${extName}`)
        let _dir = path.format({
            root: dirName + '/__test__/',
            base: testName
        })

        console.log(_dir,'>>>>>>>>>>>');
        return _dir
    }
    getTestSource(method, dir,isClass = false){
        return `
        test('测试 >>>' ${method}, () => {
            const { hello:req } = ${isClass}
            //expect(req)
                //.toBe('hello world')
        })
        `
    }
}