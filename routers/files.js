const Router = require('@koa/router')
const router = new Router({prefix: '/files'})


router.post('/upload', (ctx) => {
  const files = ctx.request.files
  ctx.body = files
})

router.post('/upload2', (ctx) => {
  const files = ctx.request.files
  ctx.body = files
})

module.exports = router