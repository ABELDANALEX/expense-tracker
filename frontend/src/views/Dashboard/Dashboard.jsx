import { useState } from "react";
import './Dashboard.css'
export default function Dashboard(){

    const firstTime = true; //whether first time login or not
    const username = "John"; //get it from login
    const [balance, setBalance] = useState(100000);

    const commafy = (number) => {
          return new Intl.NumberFormat('en-IN').format(number);
    }

    

    return(
        <>
            <div className="dashboard-ancestor-container" id="dashboard-ancestor-container">
                <div className="dashboard-header-container" id="dashboard-header-container">
                    <p className="dashboard-header" id="dashboard-header">
                        Welcome, <span className="dashboard-header-username" id="dashboard-header-username">{username}!</span>
                    </p>
                    <button className="dashboard-signout-button" id="dashboard-signout-button">
                        SIGN OUT
                    </button>
                </div>
                <div className="current-balance-container" id="current-balance-container">
                    Current Balance: <span className="current-balance" id="current-balance ">₹ {commafy(balance)}</span>
                </div>
                
            </div>
        </>
    )
}