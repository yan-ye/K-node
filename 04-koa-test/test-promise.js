function g1() {
//    return console.log(11111)
 throw 'err'
}
Promise.reject(g1)
.then(ret => console.log('222222xxxx'))
.catch(err => console.log('xxxxxx'))




const promise1 = new Promise((resolve, reject) => {
    console.log('promise1 >>>>>');
    reject()
})
promise1.then(ret => {
    console.log('promise then');
}, function (err) {
    console.log('errormsg');
})


const t1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('t1')
    }, 2000);
})
const t2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('t2')
    }, 1000);
})
const t3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('t3')
    }, 1000);
})
Promise.all([t1, t2, t3]).then(ret => {
    console.log(`promise.all ${JSON.stringify(ret)}`);
}).catch(err => {
    console.log(`promise.all ${JSON.stringify(err)}`);
})


const tt1 = Promise.reject('出错了')
tt1.catch(err => console.log(err, '>>>>'))
const f1 = () => console.log('f1');
(async () => f1)().then().catch

// const xx = new Promise(resolve =>{
//     resolve()
// })
// xx.then(rest =>{
//     f1()
// })

t2.then(ret => {
    console.log(11111);
}).catch(err => {
    console.log('22222');
})


async function fff1(params) {
    console.log(1000000);
    setTimeout(() => {
        console.log('ccccc');
       return Promise.resolve()
    }, 3000);
}
console.log(1111111);
console.log(2222222);
console.log(333333);
(async () => {
    await fff1()
    console.log(999999);
})()






console.log('hi');
