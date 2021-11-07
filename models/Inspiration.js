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
        css: {
            type: DataTypes.STRING,
            defaultValue: 'position:absolute;top:51.64319248826291vw; left:59.53051643192488vw;',
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'inspiration',
    }
);

module.exports = Inspiration;