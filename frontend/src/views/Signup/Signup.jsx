import "./Signup.css";

export default function Signup() {
  return (
    <>
      <div className="signup-container">
        <div className="card">
          <div className="header">
            <div className="txt">SignUp</div>
          </div>
          <div className="form">
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit">SignUp</div>
          </div>
        </div>
      </div>
    </>
  );
}
