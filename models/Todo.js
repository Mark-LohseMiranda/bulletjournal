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
        content1IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content2: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content2IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content3: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content3IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content4: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content4IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content5: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content5IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content6: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content6IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content7: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content7IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content8: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content8IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content9: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content9IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        content10: {
            type: DataTypes.STRING,
            defaultValue: ' ',
        },
        content10IsChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        css: {
            type: DataTypes.STRING,
            defaultValue: 'position:absolute;top:64.22535211267606vw; left:8.63849765258216vw;',
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'todo',
    }
);

module.exports = Todo;