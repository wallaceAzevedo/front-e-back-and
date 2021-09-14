const sequelize = require('sequelize');

const connect = new sequelize('curso','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connect;