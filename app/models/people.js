'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      People.hasMany(models.Classrooms, {
        foreignKey: 'teacher_id'
      })
      
      People.hasMany(models.Registrations, {
        foreignKey: 'student_id'
      })
      
    }
  };
  People.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    roles: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};