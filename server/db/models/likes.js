const Sequelize = require('sequelize')
const db = require('../db')

const Likes = db.define('likes', {
  sender:{
    type: Sequelize.STRING
  },
  reciever:{
    type: Sequelize.STRING
  },
  mutual:{
    type: Sequelize.BOOLEAN,
    default: false
  }
})

module.exports = Likes
