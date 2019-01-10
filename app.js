var express = require('express');
var path = require('path');
var ejs = require('ejs');
var  index = require('./routes/index');
var  data = require('./routes/data');
var app = express();
app.set('views', path.join(__dirname, 'pxq'));//设置页面路径
app.engine('html',ejs.__express);//使用html
//app.set('view engine', 'ejs');
app.set('view engine', 'html');//使用html
app.use(express.static(path.join(__dirname, '')));//公共路径

app.use('/', index);//首页
app.use('/data', data);
//处理404返回404页面
app.use((req, res, next)=> {
	var err = new Error('Not Founda');
	err.status = 404;
	res.json(err);
	console.log(err)
});
//use错误处理
app.use((err, req, res, next)=> {
	console.log(123)
	res.locals.message = err.message;
	// res.status(err.status || 500);
	// res.render('error');
});
let port = 3070;
app.listen(port, ()=> { 
	console.log('Listening on port'+port) 
})


