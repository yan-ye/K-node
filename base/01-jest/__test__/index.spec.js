// test('测试hello', () => {
//     const { hello:req } = require('../index')
//     expect(req)
//         .toBe('hello world')
// })

test('测试 >>> 生成测试文件', () =>{
    const testNow = new (require('../index'))()
    const res = testNow.getTestFileName('../base/class.js')
    expect(res)
        .toBe('../base/__test__/class.spec.js')
})
