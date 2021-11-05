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
        content8am: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content9am: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content10am: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content11am: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content12pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content1pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content2pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content3pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content4pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content5pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content6pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content7pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        content8pm: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
        css: {
            type: DataTypes.STRING,
            defaultValue: 'position: absolute;',
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'schedule',
    }
);

module.exports = Schedule;