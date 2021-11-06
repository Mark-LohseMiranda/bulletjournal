const { Model, DataTypes} = require('sequelize');
const sequelize = require("../config/connection");

class List extends Model {};

List.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content1: {
            type: DataTypes.STRING,
            allowNull:true
        },
        content2:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content3:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content4:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content5:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content6:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content7:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content8:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content9:{
            type:DataTypes.STRING,
            allowNull:true
        },
        content10:{
            type:DataTypes.STRING,
            allowNull:true
        },
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'list',
    }
);

module.exports = List