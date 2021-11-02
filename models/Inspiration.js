const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inspiration extends Model {}

Inspiration.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            defaultValue: ' ',
        },
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'inspriation',
    }
);

module.exports = Inspiration;