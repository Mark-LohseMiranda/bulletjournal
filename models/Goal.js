const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goal extends Model {}

Goal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content1: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content2: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content3: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content4: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content5: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content6: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content7: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content8: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content9: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        content10: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        css: {
            type: DataTypes.STRING,
            defaultValue: 'position:absolute;top:64.31924882629107vw; left:42.72300469483568vw;',
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'goal',
    }
);

module.exports = Goal;