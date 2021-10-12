'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogRequest extends Model {
    static associate(models) {
        
    }
  };
  LogRequest.init({
    date: DataTypes.DATE,
    endpoint: DataTypes.STRING,
    parameters: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'LogRequest',
  });
  return LogRequest;
};