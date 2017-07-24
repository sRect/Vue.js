const path = require('path');
const config = require('./config');
const jsonServer = require('json-server');

const ip = config.SERVER;
const port = config.PORT;
const db_file = config.DB_FILE;

const server = jsonServer.create();
//根据db.json文件自动生成路由规则
const router = jsonServer.router(path.join(__dirname, config.DB_FILE));
//中间件
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
//设置增加一个响应头信息“从server到前端”
server.use((req, res, next) => {
		res.header('X-Hello', 'World');
		next();
	})
	//数据发送到前端之前包一层
router.render = (req, res) => {
	res.jsonp({
		code: 0,
		body: res.locals.data //res.locals.data这个是真正的数据
	})
}
server.use("/api", router); //模拟api接口，就是访问api的时候给制定路由规则

server.use(router);
server.listen({
	host: ip,
	port: port,
}, function() {
	console.log(JSON.stringify(jsonServer));
	console.log(`JSON Server is running in http://${ip}:${port}`);
});