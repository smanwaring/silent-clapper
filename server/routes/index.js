// init router
const router = require('express').Router();
const Board = require('../db/models').Board;
const Button = require('../db/models').Button;

router.param('boardId', function(req, res, next, theId){
  Board.findOne({
    where: { path: theId }
  })
  .then(function(foundBoard){
    req.board = foundBoard;
    next(); // call next() here so the middleware knows to go to the next route
  })
	.catch(next); // error handling
});

//post a newly created board link
router.post('/', (req, res, next) => {
  let buttons = req.body.buttons;
  Board.create({
    path: req.body.path,
    buttons: buttons
  }, {
    include: [ Button ]
  })
  .then(createdBoard => res.send(createdBoard))
  .catch(next);
});

//get the board if it exists
router.get('/:boardId', (req, res, next) => {
  let data = {message: 'not found'};
  let foundBoard = req.board;
  if (!foundBoard){
    res.send(data);
  } else {
    res.send(foundBoard.path);
  }
  next();
});

//get the buttons for a particular board
router.get('/enter/:boardId', (req, res, next) => {
  var objToReturn = {};
  if (!req.board){
    objToReturn["notFound"] = true;
    res.send(objToReturn).status(404);
  } else {
    Button.findAll({
      where: {
        boardId: req.board.id
      }
    })
    .then(foundButtons => {
      objToReturn["buttons"] = foundButtons;
      res.send(objToReturn);
    })
    .catch(next);
  }
});

// No API routes matched? 404.
router.use((req, res) => res.status(404).end());

module.exports = router;
