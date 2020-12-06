'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tasks.belongsTo(models.Board, {
        foreignKey: 'board_id'
      })
      Tasks.hasMany(models.Steps, {
        foreignKey: 'tasks_id'
      })
    }
  };
  Tasks.init({
    name: DataTypes.STRING,
    board_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: 'tasks'
  });
  return Tasks;
};