const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Month extends Model {}

Month.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        month_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        days: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
     modelName: 'month',
    },
);

module.exports = Month;