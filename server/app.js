
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express(); //invoke router as app
const server = http.createServer();
const routes = require('./routes') ;
const db = require('./db');

//TODO may want to remove this comment and the other ones like it and just assume that people are familiar with the tools
//require in our models
require('./db/models');

server.on('request', app);
//after server on, init socket
const io = require('./socket')(server);

const PATHS = {
  indexHTML: path.join(__dirname, '../public/index.html'),
  public: path.join(__dirname, '../public'),
};

//TODO remove dead code
// init router ('app')
app
  .use(morgan('dev'))
  .use(express.static(PATHS.public)) //server up public files
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/api', routes);

// default routing
app.get('/*', (req, res) => {
  res.sendFile(PATHS.indexHTML);
});

// No API routes matched? 404.
app.use((req, res) => {
  res.status(404).end();
});

// Error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'testing') {
    console.error(chalk.red(err));
    console.error(chalk.red(err.stack))
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

server.listen(1337, () => {
  console.log('The server is listening on port 1337!');
    db.sync({})
    //TODO why do you have a .then if nothing is happening in it?  Can it be removed?
      .then( () => {});
});

// export app and socket.io server
module.exports = app;
