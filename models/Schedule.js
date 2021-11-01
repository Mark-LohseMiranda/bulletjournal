const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
        },
        time_of_day:{
            type:DataTypes.INTEGER,

        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'schedule',
    }
);

module.exports = Schedule;