const Sequelize = require("sequelize");
const conexao = require("../database/db");
const Cliente = conexao.define('cliente', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    }
});
Cliente.sync();
module.exports = Cliente