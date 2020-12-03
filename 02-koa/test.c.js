function fn1() {
    let index = 0
    for (index; index < 1000000; index++) {
        console.log('>>>>>>', index);
        if(index === 1000){
            return
        }
    }
    
}
async function fn2() {
    fn1()
    console.log('fn1 完成');
    console.log('fn2 完成');
}
fn2()