const expenses = require('../models/expenses')

const postExpense = async(req,res)=>{
    try{
        const { expense,price,description,option } = req.body
        const result = await expenses.create({ expense,price,description,option })
        res.json(result)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

const getExpense = async(req,res)=>{
    try{
        const result = await expenses.findAll()
        res.json(result)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

const updateExpense = async(req,res)=>{
    try{
        const {id} = req.params
        const { expense,price ,description, option } = req.body
        const [updated] = await expenses.update({ expense, price,description, option },{where:{id}} )
        if(updated){
            res.json(updated)
        }
        else{
            res.status(404).json('not found')
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}

const deleteExpense = async(req,res)=>{
    try{
        const { id } = req.params
        const result = await expenses.destroy({where:{id}})
        if(result){
            res.status(200).json({message: 'successfully deleted'})
        }
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    postExpense,
    getExpense,
    updateExpense,
    deleteExpense
}