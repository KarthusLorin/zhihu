const Router = require('koa-router')
const router = new Router({prefix: '/users'})
const {find, findById, create} = require('../controllers/home')

router.get('/', find)

router.post('/', create)

router.get('/:id', findById)

module.exports = router