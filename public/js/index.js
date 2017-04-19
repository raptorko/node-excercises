var socket = io();
socket.on('connect', function () {
  console.log('connected to the server');

});

socket.on('disconnect', function() {
  console.log('disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('message is:', message);
  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`)
  $('#messages').append(li);
});


$('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function () {

  });
});
