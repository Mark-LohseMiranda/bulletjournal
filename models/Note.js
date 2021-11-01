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
            type: DataTypes.DATE,
            allowNull:false,
        },
        inspo_quote: {
            type:DataTypes.TEXT,
        },
        to_do: {
            type:DataTypes.TEXT,
        },
        memory_text: {
            type:DataTypes.TEXT,
        },
        memory_img: {
            type:DataTypes.STRING,
        },
        reminder: {
            type:DataTypes.TEXT,
        },
        braindump: {
            type:DataTypes.TEXT,
        },
        month_id: {
            type:DataTypes.INTEGER,
            references: {
                model: 'month',
                key: 'id',
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'note',
    }
);

module.exports = Note;