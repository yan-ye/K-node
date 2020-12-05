const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    const { url, method, headers } = req
    console.log(`url: ${url}    method: ${method}`);
    if (url === '/' && method === 'GET') {
        const fsReadStrem = fs.createReadStream('./upload.html')
        res.statusCode = 200
        fsReadStrem.pipe(res)
    }
    if (url == '/upload' && method == 'POST') {
        console.log('upload....')
        const fileName = headers['file-name'] ? headers['file-name'] : 'abc.png'
        const outPath = path.join(__dirname, `./upload/${fileName}`)
        const fsWriteStream = fs.createWriteStream(outPath)
        const chunk = []
        let size = 0
        //写法一 流的方式
        //    req.pipe(fsWriteStream)  
        //    res.end()
        
        //写法二 来一点写一点
        // req.on('data', data =>{
        //   fsWriteStream.write(data)
        // })
        // req.on('end', () =>{
        //     fsWriteStream.end()
        //     res.end()
        // })

        //写法三 等文件传完一次写入
        req.on('data', data =>{
            chunk.push(data)
            size+= data.length
            console.log(size, '>>>>>');
        })
        req.on('end', () =>{
            console.log('end....');
            const buffer = Buffer.concat([chunk, size])
            size = 0
            fs.writeFileSync(outPath, buffer)
            res.end()
        })



    }
}).listen(3000, () => {
    console.log('server runing...');
})