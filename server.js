var port = 8084;
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: port});

wss.on('connection', function connection(ws) {

    ws.on('open', function open() {
	console.log('connected');
    });

    ws.on('close', function close() {
	console.log('disconnected');
    });

    ws.on('message', function message(data, flags) {
	ws.send(data);
    });

});
