const http = require('http')

class Yanye {
    listen(...argv) {
        let server = http.createServer((req, res) =>{
            this.callback(req,res)
        })
        server.listen(...argv)
    } 
    use(callback) {
        this.callback = callback
    }
} 
module.exports = Yanye