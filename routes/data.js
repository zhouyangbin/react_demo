var express=require('express');
var router =express();
 
//设置跨域访问
router.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});
 
var questions=[
{
    data:213111122,
    num:444,
    age:12
},
{
    data:456,
    num:678,
    age:13
}];
 
//写个接口123
router.get('/123',function(req,res){
    res.status(200),
    res.json(questions)
});
module.exports = router;