'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Board.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Board.hasMany(models.Tasks, {
        foreignKey: 'board_id'
      })
    }
  };
  Board.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Board',
    tableName: 'boards'
  });
  return Board;
};