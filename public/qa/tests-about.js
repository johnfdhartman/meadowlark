
suite('"about" Page Tests', function(){
	test('page should contain link to contact page', function(){
		assert($('a').filter(function(){
			return this.href.match(/contact$/);
		}).length);
	});
});