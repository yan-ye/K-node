var obj = {
    get name (){
        return this.obj1.name
    }
}
var obj1 = {
    get name(){
        return this.obj2.name
    }
}


var tt = Object.create(obj)
tt.request = Object.create(obj1)

tt.req = tt.request.obj2 = {name:'cccc'}
console.log(tt.req.name, '>>>',tt);

