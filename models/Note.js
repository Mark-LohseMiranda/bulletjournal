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
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
    }
);

module.exports = Note;