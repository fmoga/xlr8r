var express = require('express') 
  , app = express.createServer()
  , io = require('socket.io').listen(app);

app.use(express.bodyParser());
app.use('/public', express.static( __dirname + '/public'));
app.listen(8888);

io.configure(function () {
  io.set('transports', ['websocket']);
  io.set('log level', 1);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/mobile.html');
});

app.get('/player', function(req, res) {
  res.sendfile(__dirname + '/player.html');
});

app.get('/room', function(req, res) {
  res.sendfile(__dirname + '/room.html');
});

io.of('/publish').
  on('connection', function (socket) {
    console.log('Publisher connected');
    socket.on('update', function (data) {
      io.of('/subscribe').emit('update', data);
    });
  });

io.of('/subscribe').
  on('connection', function(socket) {
    console.log('Subscriber connected');
  });
