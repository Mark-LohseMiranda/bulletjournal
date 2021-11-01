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
        content: {
            type: DataTypes.TEXT,
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_it',
    }
);

module.exports = Post_it;