// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import Dashboard from './views/Dashboard/Dashboard'

function App() {
  

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
    </>
  )
}

export default App
