import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("username")?.value.trim();
    const email = document.getElementById("email")?.value.trim()
    const pwd = document.getElementById("password")?.value
    const c_pwd = document.getElementById("c_password")?.value

    if (!name || !email || !pwd || !c_pwd){
      window.alert("Please fill in all fields.")
      return
    }

    if (pwd != c_pwd){
      window.alert("Passwords do not match")
      return
    }

    alert("Signup Successful. Please login now to access the website")
    //set balance to -1. DO a check in Dashboard - if balance is -1 prompt user to enter initial balance, else show current balance
    navigate('/login')
  }
  return (
    <>
      <form className="signup-container" id="signup-container" onSubmit={handleSubmit}>
        <div className="signup-card" id="signup-card">
          <div className="signup-header" id="signup-header">
            <div className="txt">Sign Up</div>
          </div>
          <div className="signup-form" id="signup-form">
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
          <div className="signup-submit-container" id="signup-submit-container">
            <button className="signup-submit" id="signup-submit" type="submit">Sign Up</button>
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