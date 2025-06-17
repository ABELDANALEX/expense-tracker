import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate( )

  const handleSubmit = (e) =>{
    e.preventDefault();
    // window.alert("Hi")

    const email = document.getElementById("email")?.value;
    const pwd = document.getElementById("password")?.value;

    if (!email || !pwd){
      window.alert ("Please fill in both fields.")
      return
    }

    //dummy
    window.alert("login successful")
    navigate('/dashboard')
  }

  return (
    <>
      <form className="login-container" id="login-container" onSubmit={handleSubmit}>  {/* Changed it to a form element */}
        <div className="login-card" id="login-card">
          <div className="login-header" id="login-header">
            <div className="txt" id ="txt">Log In</div>
          </div>
          <div className="login-form" id="login-form">
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" placeholder="someone@enterprisename.com" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" placeholder="Enter password" />
            </div>
          </div>
          <div className="login-submit-container" id="login-submit-container">
            <button className="login-submit" id="login-submit" type="submit">Login</button>
          </div>
          <div className="signup-link-container" id="signup-link-container">
            Don't have an account?
            &nbsp;
            <span className="signup-link-inline" 
            id="signup-link-inline" 
            tabIndex={0} 
            role="link"
            onClick={() => navigate('/signup')}>Click here
            </span> 
            &nbsp;
            to register
          </div>
        </div>
      </form>
    </>
  );
}
