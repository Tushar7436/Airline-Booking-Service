'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.airport,{
        foreignKey:'cityId'
      });
      City.belongsTo(airport);
    }
  }
  City.init({
    name: DataTypes.STRING,
    allownull: false,
    unique: true
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};