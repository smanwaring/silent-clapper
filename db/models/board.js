const Sequelize = require('sequelize');
const db = require('../../db');

const Board = db.define('board', {
    path: {
        type: Sequelize.STRING,
        allowNull: false
    },
    buttons: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Board;