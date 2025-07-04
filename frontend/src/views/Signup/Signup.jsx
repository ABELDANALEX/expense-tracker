import { useState } from "react";
import "./Signup.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [balance, setBalance] = useState("");
  const [step, setStep] = useState(1); //step 1 for creds and step 2 for taking the initial balance

  const handleCredSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.warn("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
      return;
    }

    try{
      const checkData = {username: username, email: email,password :password}
      const response = await axios.post("/auth/checkuser", checkData)
      // if (response.data.exists){
      //   window.alert(response.data.error)
      //   return;
      // } automatically goes to error when it is thrown


      setStep(2);
    }catch(error){
      console.error(error)
      toast.error(error?.response?.data?.error || "Some error occurred, please try again after some time.")
    }
  };

  const handleBalanceSubmit = async (e) => {
    e.preventDefault();
    if (!balance || isNaN(balance) || Number(balance) < 0){
      toast.warn("Please enter a valid balance");return
    }
    const data={username,email,password,balance:Number(balance)}
    try{
      const response = await axios.post(`/auth/signup`,data)
      console.log(response.data)
      const token = response.data.accessToken
      localStorage.setItem("token", token)
      toast.success("Sign up successful")
      navigate("/dashboard");
    }catch(error){
      toast.error(error?.response?.data?.error || "Some error occurred")
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="signup-container"
        id="signup-container"
        onSubmit={step === 1 ? handleCredSubmit : handleBalanceSubmit}
      >
        <div className="signup-card" id="signup-card">
          <div className="signup-header" id="signup-header">
            <div className="txt">Sign Up</div>
          </div>
          {step === 1 && (
            <div className="signup-form" id="signup-form">
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  value={username}
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  value={email}
                  name="email"
                  type="email"
                  placeholder="someone@enterprisename.com"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="c_password">Confirm Password:</label>
                <input
                  value={confirmPassword}
                  name="c_password"
                  type="password"
                  placeholder="Re-Enter Password"
                  onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="signup-form">
              <label htmlFor="balance" className="balance-label" >Initial Balance (inr)</label>
              <input type="number" value={balance} name="balance" onChange={(e)=>{setBalance(e.target.value)}} placeholder="Enter initial balance" />
            </div>
          )}
          <div className="signup-submit-container" id="signup-submit-container">
            <button className="signup-submit" id="signup-submit" type="submit">
              {step===1?"Next":"Sign Up"}
            </button>
          </div>
          <div className="login-link-container" id="login-link-container">
            Already have an account? &nbsp;
            <span
              className="login-link-inline"
              id="login-link-inline"
              tabIndex={0}
              role="link"
              onClick={() => navigate("/login")}
            >
              Click here
            </span>
            &nbsp; to login
          </div>
        </div>
      </form>
    </>
  );
}
