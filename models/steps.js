'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Steps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Steps.init({
    name: DataTypes.STRING,
    task_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    struggles: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Steps',
    tableName: 'steps'
  });
  return Steps;
};