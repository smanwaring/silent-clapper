const Sequelize = require('sequelize');
const db = require('../../db');

const Button = db.define('button', {
  icon: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Button;
