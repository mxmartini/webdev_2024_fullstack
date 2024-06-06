import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Index from "./pages/Index"
import AppContext from "./AppContext";
import { useState } from "react";

import "./assets/dropdown.css"
import "./assets/header.css"
import Header from "./components/Header";
import Login from "./pages/Login";

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
