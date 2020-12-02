const Kob = require('./Kob')
const app = new Kob()

app.use(async(ctx, next) =>{
    console.log(1111111);
    ctx.body = 'hehe'
    next()
    console.log(66666);
})
app.use(async(ctx, next) =>{
   console.log(222222);
    next()
    console.log(555555);
})
app.use(async(ctx, next) =>{
    console.log(33333333);
     next()
     console.log(44444444);
     
 })

app.listen(3000, ()=>{
    console.log('server ok...');
})