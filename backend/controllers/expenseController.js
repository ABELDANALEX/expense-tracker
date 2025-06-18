const expenses = require('../models/expenseModel')

exports.getAllExpenses= async(req,res)=>{
    const id=req.params.id
    try {
        const history = await expenses.find({userId:id})
        return res.status(200).send({history:history})
    }catch(error){
        console.error('Error fetching expenses history',error.message)
        res.status(500).json({message:'Error fetching expenses history',error})
    }
}

exports.createExpense=async(req,res)=>{
    const expense=req.body
    try{
        const newExpense=new expenses(expense)
        const savedExpense=await newExpense.save()
        return res.status(201).send({message:'Expense created successfully',savedExpense})
    }catch(error){
        console.error('Error creating expense',error.message)
        return res.status(500).send({error:'Error creating expense'})
    }
}

exports.deleteExpense=async(req,res)=>{
    const id=req.params.id
    try {
        const deletedExpense = await expenses.findByIdAndDelete({_id:id});
        if(!deletedExpense){
            return res.status(404).send({message:'Expense not found'})
        }
        return res.status(200).send({message:'Expense deleted successfully'})
    }catch(error){
        console.error('Error deleting expense',error.message)
        return res.status(500).send({error:'Error deleting expense'})
    }
}