const { Router } = require('express');
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize (
    'fullstack_expensetracker',
    'root',
    'Supra@A90',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

(
    async()=>{
        try{
            await sequelize.authenticate()
            console.log('connection created!')
        }
        catch(err){
            console.log(err.message)
        }
    }
)()

module.exports = sequelize