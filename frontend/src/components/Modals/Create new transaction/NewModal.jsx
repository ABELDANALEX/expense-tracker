import "./NewModal.css";
import { set, useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function NewModal(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onError = (formErrors) => {
  if (formErrors.title) toast.warn("Title is required.");
  else if (formErrors.amount) toast.warn("Amount is required.");
  };

  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (modalRef.current === e.target) {
      props.onClose();
    }
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = async (data) => {
    const amount = Number(data.amount)
    if (isNaN(amount) || amount <=0){
      toast.error("Amount should  be a positive number")
      return
    }
    try{
      const res= await axios.post("/expense", {data,userId:props.id})
      console.log(res.data)
      props.setBalance(res.data.newBalance)
      toast.success(res.data.message)
      props.onClose()
    }catch(error){
      console.log(error?.response?.data?.error)
      toast.error(error?.response?.data?.error || "Something went wrong")
    }
    

  };

  return (
    <>
      <div
        className="modal-container"
        ref={modalRef}
        onClick={handleBackdropClick}
      >
        <form className="modal-card" onSubmit={handleSubmit(onSubmit,onError)}>
          <div className="newModal-header" id="newModal-header">
            <div className="txt" id="txt">
              Create transaction
            </div>
          </div>
          <div className="transaction-form" id="transaction-form">
            <div>
              <label htmlFor="title">Title</label>
              <input {...register("title",{ required: true })} type="text" />
            </div>
            <div>
                <label htmlFor="">Category</label>
              <select className="transaction-category" {...register('category', { required: true })}>
                <option value="groceries">Groceries</option>
                <option value="medical">Medical</option>
                <option value="personal">Personal</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
                <option value="transport">Transport</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input {...register("amount",{ required: true })} type="text"/> {/*Changed type to text so as to display error messages*/}
            </div>
            {/* <div>
              <label htmlFor="date">Date</label>
              <input {...register("date")} type="date" />
            </div> */}
            <div>
              <label htmlFor="note">Note</label>
              <input {...register("note")} type="text" />
            </div>
            
          </div>
          <div className="submit-container" id="submit-container">
            <div>
              {" "}
              <button className="submit" id="create-submit" type="submit">
                Create
              </button>
            </div>
            <div>
              <button
                className="submit"
                id="cancel"
                type="button"
                onClick={props.onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
