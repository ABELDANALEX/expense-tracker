const User=require('../models/userModel')

exports.getBalance=async(req,res)=>{
    const id=req.params.id
    try{
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        const balance=user.balance
        return res.status(200).send({message:"Balance fetched successfully",balance})
    }catch(error){
        console.error("Error fetching balance",error.message)
        return res.status(500).send({message:"Error fetching balance"})
    }
}

exports.updateBalance=async(req,res)=>{
    const {id,amount}=req.body
    try{
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        const balance=user.balance+amount
        const updatedUser=await User.findByIdAndUpdate(id,{balance:balance},{new:true})
        return res.status(200).send({message:'Balance updated successfully',updatedUser})
    }catch(error){
        console.error("Error updating balance",error.message)
        return res.status(400).send({message:'Error updating balance'})
    }
}