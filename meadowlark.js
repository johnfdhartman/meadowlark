var express = require('express');

var app = express();

var fortunes = [
	'thins happn',
	'stop',
	'no',
	'good fortune!'
];

var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
	res.render('home');
});

app.get('/about', function(req,res){
	var randomFortune = 
		fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune});
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('express started on http://localhost:' + 
		app.get('port') + ' ; press ctrl c to stop');
});

