const Kob = require('./kob')
const app = new Kob()

app.use((ctx) =>{
    ctx.body = 'hehe'
    
});


app.listen(3000, function (params) {
    console.log(11111);
})