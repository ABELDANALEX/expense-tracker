import { useState } from "react";
import axios from "axios";
import './UpdateBalanceModal.css'

export default function UpdateBalanceModal(props){
    const [amount, setAmount] = useState("")

    const handleUpdate = async() => {
        if(!props.id || isNaN(amount)) return

        try{
            const res = await axios.patch("/balance",
                {
                    id: props.id,
                    amount: Number(amount)
                }
            )
            props.setBalance(res.data.updatedUser.balance)
            props.onClose()
        }catch(err){
            console.log("Error updating balance",err)
        }
    }

    return (
        <div className="update-modal-backdrop" onClick={props.onClose}>
            <div className="update-modal-container" onClick={(e) => e.stopPropagation()}>
                <h2>Update Balance</h2>
                Amount:<input type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter the amount to top up"/>

                <div className="update-modal-buttons">
                    <button onClick={handleUpdate} className="update">Update</button>
                    <button onClick={props.onClose} className="cancel">Cancel</button>
                </div>
            </div>
        </div>

    )
}