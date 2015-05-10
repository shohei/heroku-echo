var port = process.env.PORT || 8085;
console.log('listening on '+port);
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: port});

wss.broadcast = function(data) {
  for (var i in this.clients)
    this.clients[i].send(data);
};

wss.on('connection', function connection(ws) {
  ws.on('open', function () {
    console.log('connected');
  });


  ws.on('close', function () {
    console.log('disconnected');
  });

  ws.on('message', function (data, flags) {
    wss.broadcast(data);
    // ws.send(data);
  });

});
