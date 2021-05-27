'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classrooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Classrooms.hasMany(models.Registrations, {
        foreignKey: 'classroom_id'
      })

      Classrooms.belongsTo(models.People, {
        foreignKey: 'teacher_id'
      })

      Classrooms.belongsTo(models.Levels, {
        foreignKey: 'level_id'
      })

    }
  };
  Classrooms.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classrooms',
  });
  return Classrooms;
};