const socketio = require('socket.io');

let io;

module.exports = (server) => {
// creates a new connection server for web sockets and integrates it into our HTTP server 
// this needs to be below the server.on('request', app) so that our 
// express app takes precedence over our socket server for typical HTTP requests

  if (io) {
    return io;
  }

  io = socketio(server);

  //keep track of the rooms that are live at any given time
  let roomsToCount = {};

  // use socket server as an event emitter in order to listen for new connections
  io.on('connection', (socket) => {
    let newRoom;
    // listens to emit to join room
    socket.on('wantToJoinRoom', (roomName) => {
      newRoom = roomName;
      socket.join(newRoom);
      socket.currRoom = newRoom;
      roomsToCount[newRoom] = socket.adapter.rooms[newRoom].length;
      io.emit('connectionEvent', roomsToCount[newRoom]);
    });

    //event that runs anytime a socket disconnects
    socket.on('disconnect', () => {
      if (socket.adapter.rooms[newRoom]){
        roomsToCount[newRoom] = socket.adapter.rooms[newRoom].length;
        io.emit('connectionEvent', roomsToCount[newRoom]);
      } else {
        delete  roomsToCount[newRoom];
      }
      socket.disconnect();
    });

    // server is receiving click data from the client here 
    // so we want to broadcast that data to all other connected clients 
    socket.on('registerAction', (icon) => {
      console.log('I am emitting to', newRoom);
      io.to(newRoom).emit('showAction', icon);
    });

  });

  return io;

};


