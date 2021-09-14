const sequelize = require('sequelize');
const connect = require('../conexao');

const user = connect.define('users',{
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: sequelize.STRING,
        allowNull: false,
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false,
    },
    image:{
        type: sequelize.STRING,
        allowNull: true,
    },
    token:{
        type: sequelize.STRING,
        allowNull:true,
    }
})

user.sync({force:false}).then(() =>{console.log('Tabela Criada')}).catch(() => {console.log('Erro ao criar tabela')})
module.exports = user;