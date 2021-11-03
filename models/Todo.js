const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo extends Model {}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content1: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content2: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content3: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content4: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content5: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content6: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content7: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content8: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content9: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content10: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'todo',
    }
);

module.exports = Todo;