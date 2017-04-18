const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {

    socket.emit('newMessage', {
    from: 'trol',
    text: 'trololololo',
    createdAt: 1345
  });

  socket.on('createMessage', (message) => {
    console.log('message is:', message);
  })

  console.log('new user connected');
  socket.on('disconnect', () => {
    console.log('disconnected from the server');
  });
});


server.listen(port, function () {
  console.log(`running on port ${port}`);
});

module.exports = {app};
