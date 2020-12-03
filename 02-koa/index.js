<<<<<<< HEAD
const Kob = require('./kob')
const app = new Kob()

app.use((ctx) =>{
    ctx.body = 'hehe'
    
});


app.listen(3000, function (params) {
    console.log(11111);
})
=======
const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
    ctx.body = [
        { name: 'tom' }
    ]
})
app.listen(3000)
>>>>>>> c83213fe6e6fe27eb0f6b14140681dedff9dbd72
