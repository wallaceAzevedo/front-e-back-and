const sequelize = require('sequelize');
const connect = require('../conexao');

const pb = connect.define('pb',{
    titulo:{
        type: sequelize.STRING,
        allowNull: false,
    },
    conteudo:{
        type: sequelize.STRING,
        allowNull: false,
    },
    img:{
        type: sequelize.STRING,
        allowNull: true,
    },
    username:{
            type: sequelize.STRING,
            allowNull:false,
        }
})

pb.sync({force:false}).then(() =>{console.log('Tabela Criada')}).catch(() => {console.log('Erro ao criar tabela')})
module.exports = pb;