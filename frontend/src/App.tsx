import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Index from "./pages/Index"
import AppContext from "./AppContext";
import { useState } from "react";


function App() {
  
  const defUser = JSON.parse(sessionStorage.getItem("user") || "null");
  const [user, setUser] = useState<Usuario>(defUser)
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="content">
      
          { user && 
          <nav className="menu">
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/home">Home</Link></li>
            </ul>
          </nav>  
          }
      
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
      
        </div>
      </Router>
    </AppContext.Provider>
  )

}

export default App
