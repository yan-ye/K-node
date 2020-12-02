const Yan = require('./yanye')
const app = new  Yan()

app.use((req, res) => {
    res.end('123')
})

app.listen(3000, () => {
    console.log(111111);
})