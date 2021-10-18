const Sequelize = require('sequelize')

const db = require('../db')

const Artists = db.define(
  'artists', {
    name: {
      type: Sequelize.  STRING
  },
  specialization:{
    type: Sequelize.ARRAY
  },
  contact:{
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  social:{
    type: Sequelize.ARRAY
  }
})
