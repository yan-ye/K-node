let arrlink = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

let arr = Array.prototype.slice.call(arrlink)
console.log(arr, '>>>>');

function fn1(name) {
    this.name = 'yanye'; 
    this.showName = function(){
        console.log(name, '>>>>>>>>>>')
    }     
}
function fn2() {
    fn1.call(this, 'oooooopppp')
}
const fn = new fn2()
fn.showName()

function ff1(name, age) {
    this.name = name;
    this.age = age
    this.showName = function () {
        console.log({ name: this.name, age: this.age });
    }
}
function ff2() {
    ff1.apply(this, ['yyyyy', '2222'])
}
const ff3 = new ff2()
ff3.showName()



let xh = {
    name: '小红',
    say(age, school) {
        console.log(`我叫 ${this.name} 今年 ${age || '未知'} 在 ${school || '未知'} 上学`);
    }
}
let xm = {
    name: '小明',
}
xh.say.call(xm, '16', '下营子小学')
xh.say.apply(xm, ['apply', 'apkpure'])





