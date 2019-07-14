const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')

console.log(routing)

app.use(bodyparser())
routing(app)

app.listen(3000, () => {
  console.log('监听3000中')
})
