var app = require('express')();

app.get('*', function(req, res){
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

