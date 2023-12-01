'use client'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Messagens.init({
    nomeCompleto: DataTypes.STRING,
    data: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    endereco: DataTypes.STRING,
    email:DataTypes.STRING,
    telefone: DataTypes.STRING,
    rg: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Messagens',
  });
  return Messagens;
};