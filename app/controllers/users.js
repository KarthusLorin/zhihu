class UsersCtl {
    find(ctx) {
        ctx.body = [{name: '李磊'}, {name: '韩梅梅'}]
    }

    findById(ctx) {
        ctx.body = `这是用户${ctx.params.id}`
    }

    create(ctx) {
        ctx.body = '创建用户'
    }
}

module.exports = new UsersCtl()