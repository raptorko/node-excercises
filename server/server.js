const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} =require('./utils/message');
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
  socket.emit('newMessage', generateMessage('Admin','Welcome to the chatapp'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('message is:', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('this is from the server');
  });
  console.log('new user connected');

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('disconnected from the server');
  });
});


server.listen(port, function () {
  console.log(`running on port ${port}`);
});

module.exports = {app};
