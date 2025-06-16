import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate=useNavigate();
  return (
    <>
      <form className="signup-container" id="signup-container">
        <div className="card" id="card">
          <div className="header" id="header">
            <div className="txt">Sign Up</div>
          </div>
          <div className="form" id="form">
            <div>
              <label htmlFor="username">Username:</label>
              <input id="username" name="username" type="text" placeholder="Username" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="someone@enterprisename.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Paswword"
              />
            </div>
            <div>
              <label htmlFor="c_password">Confirm Password:</label>
              <input
                id="c_password"
                name="c_password"
                type="password"
                placeholder="Re-Enter Password"
              />
            </div>
          </div>
          <div className="submit-container" id="submit-container">
            <button className="submit" id="submit" type="submit">Sign Up</button>
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