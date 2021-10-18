const Sequelize = require('sequelize')
const db = require('../db')

const Messages = db.define('messages', {
  reciver: {
    type: Sequelize.STRING,
  },
  sender: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate:{notEmpty: true}
  }
})

module.exports = Messages
