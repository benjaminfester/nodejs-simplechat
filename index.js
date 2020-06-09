var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();

var server = app.listen(8899, function(){
	console.log('Listening to requests on port 8899.');
});

app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', (socket) => {
	
	socket.on('chat', function(data){
		
		io.sockets.emit('chat', data);
	});

	socket.on('typing', function(data){
		socket.broadcast.emit('typing', data);
	});
});