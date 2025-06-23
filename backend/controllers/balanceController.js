const User=require('../models/userModel')

exports.getBalance=async(req,res)=>{
    const id=req.params.id
    try{
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({error:'User not found'}) //error
        }
        const balance=user.balance
        return res.status(200).send({message:"Balance fetched successfully",balance: balance}) //balance:balance instead of balance
    }catch(error){
        console.error("Error fetching balance",error.message)
        return res.status(500).send({error:"Error fetching balance"}) //error
    }
}

exports.updateBalance=async(req,res)=>{
    const {id,amount}=req.body
    try{
        if (isNaN(amount)){ //
            return res.status(400).send({error:"Enter a valid amount"}) 
        }
        if( amount<=0)return res.status(400).send({error:'Balance must be greater than 0'})
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({error:'User not found'})
        }
        const balance=user.balance+amount
        const updatedUser=await User.findByIdAndUpdate(id,{balance:balance},{new:true})
        return res.status(200).send({message:'Balance updated successfully',updatedUser})
    }catch(error){
        console.error("Error updating balance",error.message)
        return res.status(400).send({error:'Error updating balance'})
    }
}