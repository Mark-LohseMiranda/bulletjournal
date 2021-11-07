const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post_it extends Model {}

Post_it.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text_content: {
            type: DataTypes.TEXT,
        },
        image_content: {
            type: DataTypes.TEXT,
        },
        title: {
            type: DataTypes.STRING,
            defaultValue: 'Add a title or caption!'
        },
        css: {
            type: DataTypes.STRING,
            defaultValue: 'position:absolute;top:19.074074074074073vw; left:58.7962962962963vw;',
        }
    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_it',
    }
);

module.exports = Post_it;