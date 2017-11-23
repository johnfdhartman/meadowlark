var fortuneCookies = [
	'thins happn',
	'stop',
	'no',
	'good fortune!'
];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};

