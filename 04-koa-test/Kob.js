const http = require('http')
const content = require('./content')
const response = require('./response')

class Kob {
    constructor() {
        this.middlewares = []
    }
    listen(...argv) {
        const server = http.createServer(async (req, res) => {
            // this.callback(req, res)\
            //创建上下文
            const ctx = this.createContent(req, res)
            // this.callback(ctx)
            //中间件组合
            const fn1 = this.compose(this.middlewares)
            //执行
            await fn1(ctx)
            //响应
            res.end(ctx.body)
        })
        server.listen(...argv)
    }
    use(middleware) {
        this.middlewares.push(middleware)
    }

    createContent(req, res) {
        const ctx = Object.create(content)
        ctx.response = Object.create(response)
        // ctx.response.res = res
        return ctx
    }
    /**
     * 洋葱圈 中间件
     * @param {*} middlewares  //中间件数组
     */
    compose(middlewares) {
        return (ctx) => {
            dispatch(0)
            function dispatch(i) {
                let fn = middlewares[i]
                if (!fn) {
                    return Promise.resolve()
                }
                return Promise.resolve(
                    fn(ctx, function next() {
                        return dispatch(i + 1)
                    })
                )
            }
        }
    }
}

module.exports = Kob