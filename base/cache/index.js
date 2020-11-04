function updateTime() {
    this.timmer = this.timmer || setInterval(() => this.time = new Date().toUTCString(), 6000);
    return this.time = new Date().toUTCString()
}

const http = require('http')

http.createServer((req, res) => {
    const { url } = req
    if ('/' === url) {
        res.end(`
            <html>
                Html update Time ${updateTime()}
                <script src="/main.js"></script>
            </html>
        `)
    } else if (url === '/main.js') {
        const content = `document.writeln('<br> main.js update time: ${updateTime()}')`

        //强缓存
        // res.setHeader('Expires', new Date(Date.now() + 10* 1000).toUTCString())
        // res.setHeader('Cache-Control', 'max-age=20')

        //协商缓存
        res.setHeader('Cache-Control', 'no-cache')
        // res.setHeader('last-modified', new Date().toUTCString())
        // if (new Date(req.headers['if-modified-since']).getTime() + 10 * 1000 > Date.now()) {
        //     res.statusCode = 304
        //     res.end()
        //     console.log('缓存命中...');
        // }

        // const crypto = require('crypto')
        // const hash = crypto.createHash('sha256').update(content + 'haha').digest('hex')
        // res.setHeader('Etag', hash)
        // if(req.headers['if-none-match'] === hash) {
        //     console.log('缓存命中...');
        //     res.statusCode = 304
        //     res.end()
        // }


        // // res.setHeader('Expires', new Date(Date.now() + 10 *1000).toUTCString()) //强缓存 1.0
        // // res.setHeader('Cache-Control', 'max-age=20')//强缓存 1.1

        // //协商缓存
        // res.setHeader('Cache-Control', 'no-cache') //不走强缓存
        // // res.setHeader('last-modified', new Date().toUTCString())
        // // if(new Date(req.headers['if-modified-since']).getTime() + 6 * 1000 > Date.now()){
        // //     console.log('协商缓存命中');
        // //     res.statusCode = 304
        // //     res.end('')
        // //     return
        // // }
        // const crypto = require('crypto')
        // const hash = crypto.createHash('md5').update(content).digest('hex')
        // res.setHeader('Etag',hash)
        // if(req.headers['if-none-match'] === hash){
        //     console.log('缓存命中....');
        //     res.end()
        // }
        res.statusCode = 200
        res.end(content)
    } else if (url === '/favicon.ico') {
        res.end('')
    }
}).listen(3000, () => {
    console.log('server runing...')
})
