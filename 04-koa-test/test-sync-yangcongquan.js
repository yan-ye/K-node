function add(x, y) {
    return x + y
}

function c(z) {
    return z * z
}

function compose(...[first, ...other]) {
    console.log(first,other, '>>>>')
    return (...argv) => {
        let ret = first(...argv)
        other.forEach(fn => {
            ret = fn(ret)
        })
        return ret
    }
}
const fn = compose(add, c, c)
 console.log(fn(1,2));

