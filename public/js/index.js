var socket = io();
socket.on('connect', function () {
  console.log('connected to the server');  

  socket.emit('createMessage', {
    from: 'pica@pica.com',
    text: 'jebem na teba'
  });
});

socket.on('disconnect', function() {
  console.log('disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('message is:', message);
});
