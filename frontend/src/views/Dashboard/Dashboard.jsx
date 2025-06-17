import { useState } from "react";
import './Dashboard.css'
export default function Dashboard(){

    const firstTime = true; //whether first time login or not
    const username = "John"; //get it from login

    return(
        <>
            <div className="ancestor-container" id="ancestor-container">
                <div className="header-container" id="header-container">
                    <p className="header" id="header">
                        Welcome, {username}!
                    </p>
                    <button className="signout-button" id="signout-button">
                        SIGN OUT
                    </button>
                </div>
                <div className="footer" id="footer"></div>
            </div>
        </>
    )
}