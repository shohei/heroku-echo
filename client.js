var WebSocket = require('ws');
var ws = new WebSocket('ws://floating-springs-1332.herokuapp.com');

ws.on('open', function open() {
  var msg = "some message";
  console.log("sending ",msg);
  ws.send(msg);
});

ws.on('message', function(data, flags) {
  console.log("received: ",data);
});

