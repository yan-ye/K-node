function tim(ms) {
    console.log(3333333333);
    return new Promise(resolve => {
        console.log(444444444444);
        setTimeout(() => {
            console.log(666666666);
            resolve()
        }, ms);
    })
}
async function timfb(ms) {
    console.log(222222222);
    await tim(ms)
    console.log(7777777777777);
    return 'hello world'
}
console.log(11111111);
timfb(3000).then(ret => console.log(ret)).catch(err => console.log(err))
console.log(5555555555555);


let p = Promise.resolve()
console.log(p, '>>>>');
p = p.then(ret =>{
    throw '出错了'
})

p.catch(err => console.log(err, '>>>>>'))  
