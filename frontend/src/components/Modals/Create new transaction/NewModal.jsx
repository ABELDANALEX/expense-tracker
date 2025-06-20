import "./NewModal.css";
import { set, useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";

export default function NewModal({ onClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = async (data) => {
    await delay(2000);
    console.log("/expense", {data,userId:id});
  };

  return (
    <>
      <div
        className="modal-container"
        ref={modalRef}
        onClick={handleBackdropClick}
      >
        <form className="modal-card" onSubmit={handleSubmit(onSubmit)}>
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
              <label htmlFor="amount">Amount</label>
              <input {...register("amount",{ required: true })} type="number" />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input {...register("date")} type="date" />
            </div>
            <div>
              <label htmlFor="note">Note</label>
              <input {...register("note")} type="text" />
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
                onClick={onClose}
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
