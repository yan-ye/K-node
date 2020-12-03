module.exports = {
    get url(){
        return this.request.url
    },
    get method(){
        this.request.method
    },
    get body(){
        return this.response.body
    },
    set body(val){
        this.response.body = val
    },
}