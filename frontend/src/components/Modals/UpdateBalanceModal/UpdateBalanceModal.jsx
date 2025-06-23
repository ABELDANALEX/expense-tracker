import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './UpdateBalanceModal.css'

export default function UpdateBalanceModal(props){
    const [amount, setAmount] = useState(undefined)

    const handleUpdate = async() => {
        if(!props.id || isNaN(amount)) return toast.error('Balance must be a number')

        try{
            const res = await axios.patch("/balance",
                {
                    id: props.id,
                    amount: Number(amount)
                }
            )
            props.setBalance(res.data.updatedUser.balance)
            console.log(res)
            toast.success(res.data.message)
            props.onClose()
        }catch(error){
            console.log(error)
            toast.error(error?.data?.response?.error || "Something went wrong")
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