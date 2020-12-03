async function fn1(next) {
    console.log('fn1');
    next && await next()
    console.log('end fn1');
}
async function fn2(next) {
    console.log('fn2');
    await delay(1000)
    next && await next()
    console.log('end fn2');
}
async function fn3(next) {
    console.log('fn3');
    await delay(1000)
    next && await next()
    console.log('end fn3');

}

async function fn4(next) {
    console.log('fn4');
    await delay(1000)
    next && await next()
    console.log('end fn4');
}

 function delay(timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`等待时间: ${timer / 1000}s 完成...`);
            resolve()
        }, timer);
    })
}


const middlewares = [fn1, fn2, fn3, fn4]
const fnAll = compose(middlewares)
fnAll()


function compose(middlewares) {
    return () =>{
        dispatch(0)
        function dispatch(i) {
            let fn = middlewares[i]
            if(!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}



// function compose(middlewares) {
//     return function () {
//         return dispach(0)
//         function dispach(i) {
//             let fn = middlewares[i]
//             if (!fn) {
//                 return Promise.resolve()
//             }
//            return Promise.resolve(
//                 fn(function next() {
//                     return dispach(i + 1)
//                 })
//             )
//         }
//     }
// }
