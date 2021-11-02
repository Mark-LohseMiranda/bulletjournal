const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        day: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
    }
);

module.exports = Note;