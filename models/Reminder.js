const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reminder extends Model {}

Reminder.init(
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
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reminder',
    }
);

module.exports = Reminder;