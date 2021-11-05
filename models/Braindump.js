const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Braindump extends Model {}

Braindump.init(
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
        title: {
            type: DataTypes.STRING,
            defaultValue: 'BrainDump'
        },
        css: {
            type: DataTypes.STRING,
            defaultValue: 'position: absolute;',
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'braindump',
    }
);

module.exports = Braindump;