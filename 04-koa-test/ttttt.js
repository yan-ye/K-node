const fn1  = (x,y)=>  x + y
const fn2 = z => z * z

// const compose = (fn1, fn2) => (...argv) => fn2(fn1(...argv))

const compose = (...[first, ...other]) => (...argv) =>{
    let ref = first(...argv)
    other.forEach(fn =>  ref = fn(ref))
    return ref     
}

const fn = compose(fn1,fn2, fn2,fn2,fn2,fn2)
console.log((fn(2,2)), '>>>>>');
