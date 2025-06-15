import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="card">
          <div className="header">
            <div className="txt">LogIn</div>
          </div>
          <div className="form">
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit">Login</div>
          </div>
        </div>
      </div>
    </>
  );
}
