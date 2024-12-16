import React from "react"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import AdminSignup from "./Component/AdminSignup"
import AdminLogin from "./Component/AdminLogin"
import AdminDashboard from "./Component/AdminDashboard"
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<AdminSignup/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
