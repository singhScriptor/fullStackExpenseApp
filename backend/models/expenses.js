const { DataTypes } = require('sequelize')

const sequelize = require('../utils/db-connection')

const expenses = sequelize.define('expenses',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    expense:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    option:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
    {
        tableName:'expenses',
        timestamps:false
    }

)
module.exports = expenses