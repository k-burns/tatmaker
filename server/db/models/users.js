const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false,

  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    get(){
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get(){
      return () => this.getDataValue('salt')
    }
  },
  accType:{
    type: Sequelize.STRING,
    validate:{isIn:['artist', 'user']}
  },
  connections:{
    type: Sequelize.STRING
  },
  details:{
    type: Sequelize.TEXT
  },
  pictures:{
    type: Sequelize.ARRAY
  }
})

User.prototype.correctPassword = function(possPass){
  return User.encryptPassword(possPass, this.salt()) === this.password()
}

User.generateSalt = function(){
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(text, salt){
  return crypto
  .createHash('RSA-SHA256')
  .update(salt)
  .digest('hex')
}

const setSaltAndPassword = user => {
  if(user.changed('password')){
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})

module.exports = User
