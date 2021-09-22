const Koa = require('koa');
const app = new Koa();

// 注册路由
const config = require('./conf');
const { loadModel } = require('./framework/loader');
loadModel(config)(app);

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const restful = require('./framework/router');
app.use(restful.routes());
app.use(restful.allowedMethods({ 
    throw: true, // 抛出错误，代替设置响应头状态
    notImplemented: () => '不支持当前请求所需要的功能',
    methodNotAllowed: () => '不支持的请求方式'
}));

app.listen(3000, () => {
    console.log("Server on 3000");
})