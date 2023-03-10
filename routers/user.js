const Router = require('@koa/router')
const router = new Router({ prefix: '/user' })

router.get('/', (ctx) => {
  // on url  /user?name=name&age=18
  const query = ctx.query
  // const query = ctx.query = ctx.requect.params
  ctx.body = query
})

router.post('/', (ctx) => {
  ctx.body = ctx.request.body
})

router.get('/:name/:age', (ctx) => {
  const params = ctx.params
  // params = ctx.params = ctx.request.params
  ctx.body = params
})

router.post('add', (ctx) => {
  ctx.body = 'post'
})

router.delete('delete', (ctx) => {
  ctx.body = 'delete'
})

router.put('/update', (ctx) => {
  ctx.body = 'put'
})

router.all('/userall', (ctx) => {
  ctx.body = 'all method allow' + ctx.method
})

router.get('/testredirect', (ctx) => {
  ctx.redirect('/user/select')
})

module.exports = router
