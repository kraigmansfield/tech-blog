const {Model,DataTypes}=require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model{}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull:false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'post',
            key:'id'
        }
    },
}, {
    sequelize
});

module.exports= Post;