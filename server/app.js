
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express(); //invoke router as app
const server = http.createServer();
const socketio = require('socket.io');
const routes = require('./routes') ;
const db = require('../db');

require('../db/models');

server.on('request', app);

const PATHS = {
  indexHTML: path.join(__dirname, '../public/index.html'),
  public: path.join(__dirname, '../public'),
}

// init router ('app')
app
  .use(express.static(PATHS.public)) //server up public files
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan('dev'))   
  .use('/api', routes) 

// default routing
app.get('/*', function(req, res){
  res.sendFile(PATHS.indexHTML)
});

// Error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'testing') {
    console.error(chalk.red(err));
    console.error(chalk.red(err.stack))
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// creates a new connection server for web sockets and integrates it into our HTTP server 
// this needs to be below the server.on('request', app) so that our 
// express app takes precedence over our socket server for typical HTTP requests 
var io = socketio(server);

// use socket server as an event emitter in order to listen for new connections
io.on('connection', function(socket){

  let newRoom;

    // listens to emit to join room
  socket.on('wantToJoinRoom', function(roomName) {
    console.log('joining room', roomName);
    newRoom = roomName;
    socket.join(newRoom);
  });

  //receives the newly connected socket called for each browser that connects to our server
  let count = (io.engine.clientsCount);
  io.emit('connectionEvent', count);

  //event that runs anytime a socket disconnects
  socket.on('disconnect', function(){
    count = (io.engine.clientsCount - 1);
    io.emit('connectionEvent', count);
    socket.leave(newRoom);
    socket.disconnect();
  })

  // server is receiving click data from the client here 
  // so we want to broadcast that data to all other connected clients 
  socket.on('registerAction', function(icon){
    console.log("room I am emitting to", newRoom)
    io.to(newRoom).emit('showAction', icon);
  })

})

server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
    db.sync({})
      .then(function () {
      console.log('Oh and btw the postgres server is totally connected, too');
  });
});



// export app and socket.io server
module.exports = app