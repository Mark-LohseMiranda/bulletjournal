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
        month: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        days: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
     modelName: 'month',
    },
);

module.exports = Month;