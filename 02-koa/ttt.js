async function fn1(next) {
    console.log('fn1');
    next && await next()
    console.log('fn1 end');
}
async function fn2(next) {
    console.log('fn2');
    next && await next()
    console.log('fn2 end');
}
async function fn3(next) {
    console.log('fn3');
    await deplay(200)
    next && await next()
    console.log('fn3 end');
}
async function fn4(next) {
    console.log('fn4');
    next && await next()
    for (let index = 0; index < 1000000; index++) {
        console.log('fn4 >>>>>>', index);
        
    }
}


const deplay = timer => new Promise(resolve => {
    setTimeout(() => {
        console.log(`等待 ${timer} 毫秒完成  -->继续执行`);
        resolve()
    }, timer);
})
const middlewares = [fn1, fn2, fn3, fn4]
const fn = compose(middlewares)
fn()
function compose(middlewares) {
    return () => {
        dispatch(0)
        function dispatch(i) {
            let fn = middlewares[i]
            if(!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i +1)
                })
            )
        }
    }
}