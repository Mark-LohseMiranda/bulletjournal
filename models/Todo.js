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
        content: {
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