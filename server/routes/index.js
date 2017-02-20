// init router
const router = require('express').Router();
const Board = require('../db/models').Board;
const Button = require('../db/models').Button;

// Shortcut for grabbing the correct board 
router.param('pathId', function(req, res, next, thePathId){
  Board.findOne( { where: { path: thePathId } })
  .then(function(foundBoard){
    req.board = foundBoard;
    next(); // call next() here so the middleware knows to go to the next route
  })
	.catch(next); // error handling
});

//POST a newly created board and save the buttons to the Buttons table with a boardId
router.post('/', (req, res, next) => {
  let buttons = req.body.buttons;
  Board.create({
    path: req.body.path,
    buttons: buttons
  }, {
    include: [ Button ]
  })
  .then(createdBoard => res.status(201).send(createdBoard))
  .catch(next);
});

//GET the board if it exists
router.get('/:pathId', (req, res, next) => {
  let data = { message: 'not found' };
  let foundBoard = req.board;
  if (!foundBoard){
    res.send(data);
  } else {
    res.status(200).send( { path: foundBoard.path } );
  }
});

//Get the buttons for a particular board
router.get('/buttons/:pathId', (req, res, next) => {
  var objToReturn = {};
  if (!req.board){
    objToReturn.notFound = true;
    res.status(400).send(objToReturn);
  } else {
    Button.findAll({
      where: {
        boardId: req.board.id
      }
    })
    .then(foundButtons => {
      objToReturn.buttons = foundButtons;
      res.status(200).send(objToReturn);
    })
    .catch(next);
  }
});

module.exports = router;
