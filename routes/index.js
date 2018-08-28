var express = require('express');
var router = express.Router();
var fs = require('fs');

var PATH ='./public/data/';

router.get('/', function(req, res, next) {//到首页
  res.render('', { title: '首页' });
});

module.exports = router;
