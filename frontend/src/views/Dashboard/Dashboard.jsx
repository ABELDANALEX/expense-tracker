import { useState } from "react";
import './Dashboard.css'
export default function Dashboard(){

    const firstTime = true; //whether first time login or not
    const username = "John"; //get it from login

    return(
        <>
            <div className="dashboard-ancestor-container" id="dashboard-ancestor-container">
                <div className="dashboard-header-container" id="dashboard-header-container">
                    <p className="dashboard-header" id="dashboard-header">
                        Welcome, {username}!
                    </p>
                    <button className="dashboard-signout-button" id="dashboard-signout-button">
                        SIGN OUT
                    </button>
                </div>
                
            </div>
        </>
    )
}