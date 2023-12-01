'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Messages.init({
    nomeVendedor: DataTypes.STRING,
    data: DataTypes.STRING,
    nomeProduto: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.STRING,
    quantidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};