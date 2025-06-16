import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate( )
  return (
    <>
      <form className="login-container" id="login-container">  {/* Changed it to a form element */}
        <div className="card" id="card">
          <div className="header" id="header">
            <div className="txt" id ="txt">Log In</div>
          </div>
          <div className="form" id="form">
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" placeholder="someone@enterprisename.com" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" placeholder="Enter password" />
            </div>
          </div>
          <div className="submit-container" id="submit-container">
            <button className="submit" id="submit" type="submit">Login</button>
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
