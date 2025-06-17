import { useState } from "react";
import './Dashboard.css'
export default function Dashboard(){

    
    const username = "John"; //get it from login
    const [balance, setBalance] = useState(100000);
    const [sortOption, setSortOption] = useState("latest")


    const handleSortChange = (e) => {
        const selected = e.target.value;
        setSortOption(selected)
        //other stuff goes here
    }

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
                    Current Balance: <span className="current-balance" id="current-balance">₹ {commafy(balance)}</span>
                </div>
                <hr className="dashboard-rule-1" id="dashboard-rule-1"/>
                <div className="history-headings-container" id="history-headings-container">
                    <button className="add-newexpense-button" id="add-newexpense-button"><div>+</div></button>
                    <div><i>Transaction History</i></div>
                    <select className="transaction-history-order" name="transaction-history-order" id="transaction-history-order" value={sortOption} onChange={handleSortChange}>
                        <option value="latest">By date(latest first)</option>
                        <option value="oldest">By date(oldest first)</option>
                        <option value="high">By expense(descending)</option>
                        <option value="low">By expense(ascending)</option>
                    </select>
                </div>
                <div className="transaction-history" id="transaction-history">
                    
                </div>
                
            </div>
        </>
    )
}