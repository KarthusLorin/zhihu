const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
const {find, findById, create, update, delete:del, login, checkOwner} = require('../controllers/users')

const {secret} = require('../config')
// 自制认证中间件
// const auth = async (ctx, next) => {
//     const {authorization = ''} = ctx.request.header
//     const token = authorization.replace('Bearer ', '')
//     console.log(token)
//     try {
//         // 验证是否被篡改
//         const user = jsonwebtoken.verify(token, secret)
//         ctx.state.user = user
//     } catch (err) {
//         ctx.throw(401, err.message)
//     }
//     await next()
// }
const auth = jwt({secret})

router.get('/', find)

router.post('/', create)

router.get('/:id', findById)

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

module.exports = router