import './HomePage.css'

export default function HomePage(){
    return(
    <>
        <div className="ancestor-container" id="ancestor-container">
            <div className="header" id="header">
                <div className='header-left' id='header-left'>
                    <div className='logo' id='logo'>💰</div>
                    <div className="heading-text" id="heading-text">Expense Tracker</div>
                </div>
                
                <div className="links-container" id="links-container">
                    <div className="dashboard-link" id="dashboard-link" tabIndex={0} role='button'>Dashboard</div>
                    <div className="login-link" id="login-link" tabIndex={0} role='button'>Log In</div>
                    <div className="signup-link" id="signup-link" tabIndex={0} role='button'>Sign Up</div>
                </div>
            </div>
            <div className="body-container" id="body-container">
                <div className="sub-header" id="sub-header">You Earn. We Track.</div>
                <div className="body-text" id="body-text">Take charge of your spending with our all-new expense tracking solution. Your expenses under control, start saving smarter today.</div>
            </div>
            <div className="get-started" id ="get-started" tabIndex={0} role='button'>Get Started ⟶</div>
        </div>
    </>
    )
}

