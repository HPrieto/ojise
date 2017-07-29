var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	port	= process.env.PORT || 3000,
	path    = require('path');

//CSS File Directory
app.use(express.static(path.join(__dirname, 'ojisetv')));

// route handler GET /
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/ojise/index.html');
});

//Route handler GET /home
app.get('/home', function(req, res) {
	res.sendFile(__dirname + '/ojise/index.html');
});

//Route handler GET /terms
app.get('/about', function(req, res) {
	res.sendFile(__dirname+'/ojise/about.html');
});

//Route handler GET /privacy
app.get('/contact', function(req, res) {
	res.sendFile(__dirname + '/ojise/contact.html');
});

// listen to port
server.listen(port, function() {
	console.log('ojise running on port ' + port);
});