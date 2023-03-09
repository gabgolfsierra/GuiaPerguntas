const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas','root','megasenha2002',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
