const Sequelize = require('sequelize');
const db = require('../../db');

const Board = db.define('board', {
    path: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // buttons: {
    //     type: Sequelize.ARRAY(Sequelize.TEXT),
    //     allowNull: false
    // }
});

const Button = db.define("button", {
    icon: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Board.hasMany(Button); // button << board_id // board.getPatients/setPatients


module.exports = {
    Board: Board,
    Button: Button
}