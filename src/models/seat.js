'use strict';
const {
  Model
} = require('sequelize');

const { ENUMS } = require('../utils/common');
const { BUSINESS, ECONOMY, PREMIUM_EONOMY,FIRST_CLASS } = ENUMS.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
      });

    }
  }
  Seat.init({
    airplaneId:{
      type:DataTypes.INTEGER,
      alloNull: false
    },
    row:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    col:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    type:{
      type:DataTypes.ENUM,
      values:[BUSINESS, ECONOMY, PREMIUM_EONOMY, FIRST_CLASS],
      defaultValue:ECONOMY
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};














