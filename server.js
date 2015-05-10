var port = process.env.PORT || 8085;
console.log('listening on '+port);
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: port});

wss.on('connection', function connection(ws) {
  ws.on('open', function open() {
    console.log('connected');
  });

  wss.broadcast = function(data) {
    for (var i in this.clients)
      this.clients[i].send(data);
  };

  ws.on('close', function close() {
    console.log('disconnected');
  });

  ws.on('message', function message(data, flags) {
    wss.broadcast(message);
    // ws.send(data);
  });

});
