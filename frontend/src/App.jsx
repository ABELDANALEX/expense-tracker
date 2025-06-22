// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import Dashboard from './views/Dashboard/Dashboard'
import axios from 'axios'
import { ToastContainer ,Slide} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     </Router>
     <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
    </>
  )
}

export default App
