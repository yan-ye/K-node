const http = require('http')
const request = require('./request')
const response = require('./response')
const content = require('./content')

class Kob {

    listen(...argv) {
        const server = http.createServer((req, res) => {
            // this.callback(req,res)
           const ctx = this.createContext(req, res)
           this.callback(ctx)
           res.end(ctx.body)
        })
        server.listen(...argv)
    }

    use(callback) {
        this.callback = callback
    }

    createContext(req, res) {
        const ctx = Object.create(content)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)
        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res
        return ctx
    }
}

module.exports = Kob