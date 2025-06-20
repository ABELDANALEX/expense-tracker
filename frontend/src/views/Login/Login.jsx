import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    // window.alert("Hi")


    if (!email || !password) {
      window.alert("Please fill in both fields.");
      return;
    }

    await axios.post("/auth/login",{email,password}).then((result) => {
      const token=result.data.accessToken
      const message=result.data.message
      localStorage.setItem("token",token)
      navigate("/dashboard")
      alert(message)
    }).catch((err) => {
      alert(err.response.data.error)
      console.log(err.response.data.error)
    });
  };

  return (
    <>
      <form
        className="login-container"
        id="login-container"
        onSubmit={handleSubmit}
      >
        {" "}
        {/* Changed it to a form element */}
        <div className="login-card" id="login-card">
          <div className="login-header" id="login-header">
            <div className="txt" id="txt">
              Log In
            </div>
          </div>
          <div className="login-form" id="login-form">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                placeholder="someone@enterprisename.com"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
          </div>
          <div className="login-submit-container" id="login-submit-container">
            <button className="login-submit" id="login-submit" type="submit">
              Login
            </button>
          </div>
          <div className="signup-link-container" id="signup-link-container">
            Don't have an account? &nbsp;
            <span
              className="signup-link-inline"
              id="signup-link-inline"
              tabIndex={0}
              role="link"
              onClick={() => navigate("/signup")}
            >
              Click here
            </span>
            &nbsp; to register
          </div>
        </div>
      </form>
    </>
  );
}
