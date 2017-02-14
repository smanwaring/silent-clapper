const Board = require('./board');
const Button = require('./button');

Board.hasMany(Button); // button << board_id // board.getButton/setButton

module.exports = {
  Board: Board,
  Button: Button
};
