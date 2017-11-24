var app = require('express')();

app.use(function(req,res,next){
	console.log('middleware1');
	next();
});

app.get('/a', function(req, res, next){
	res.send('a');
});

app.use('/a',function(req, res, next){
	console.log('middleware2');
	next();
});

app.get('/', function(req, res){
	console.log('root path');
	res.send('yeaaa');
});

app.use(function(req, res){
	res.status(404);
	res.send('404 not found');
});


app.listen(3000, function(){
	console.log('server running!');
});

