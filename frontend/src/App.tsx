import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "./AppContext";

import Home from "./pages/Home"
import Index from "./pages/Index"
import Login from "./pages/Login";

import { useState } from "react";

import "./assets/dropdown.css"
import "./assets/header.css"


function App() {
  

  const defUser = JSON.parse(sessionStorage.getItem("user") || "null");
  const [user, setUser] = useState<any>(defUser)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Router>

        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        
      </Router>
    </AppContext.Provider>
  )

}

export default App
