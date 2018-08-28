var express = require('express');
var path = require('path');
var ejs = require('ejs');
var  index = require('./routes/index');
var app = express();
app.set('views', path.join(__dirname, 'pxq'));//设置页面路径
app.engine('html',ejs.__express);//使用html
//app.set('view engine', 'ejs');
app.set('view engine', 'html');//使用html
app.use(express.static(path.join(__dirname, '')));//公共路径

app.use('/', index);//首页

//处理404返回404页面
app.use(function(req, res, next) {
	var err = new Error('Not Founda');
	err.status = 404;
	next(res.render('404.html'));
});
//use错误处理
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});
module.exports = app;