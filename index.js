const Koa = require('koa')
const app = new Koa()
const path = require('path')
const { koaBody } = require('koa-body')
const koaStatic = require('koa-static')
const mount = require('koa-mount')

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || 500
    ctx.body = error.message || "服务器错误"
  }
})

app.use(mount('/static', koaStatic(path.join(__dirname, 'uploads'))))
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, './uploads'),
      keepExtensions: true,
    },
  })
)

// regist routes
require('./routers/index.js')(app)

app.listen(3000, () => {
  console.log('serve running on http://localhost:3000')
})
