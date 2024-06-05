import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Index from "./pages/Index"
import AppContext from "./AppContext";
import { useState } from "react";

import "./assets/dropdown.css"
import "./assets/header.css"

function App() {
  
  const defUser = JSON.parse(sessionStorage.getItem("user") || "null");
  const [user, setUser] = useState<any>(defUser)
  
  //const navigate = useNavigate()

  function loginClick(){

    const user = { nome: "Max", email: "max@mail.com" }
    sessionStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    //navigate("/home")
  }

  function logoutClick(){

    sessionStorage.removeItem("user")
    setUser(null)
  }
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Router>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        <div className="header">
          
          <div className="options">
              <div className="dropdown">
              
                  <button className="dropbtn">
                      <i className="fa fa-bars"></i>
                  </button>
                      <div className="dropdown-content" style={{left: 0}}>
                          <Link to="/home">Home</Link>
                          <Link to="/pedido">Pedido</Link>
                          <Link to="/">Página inicial</Link>
                  </div>
              </div>
              <div className="dropdown">
              
                  <button className="dropbtn">
                      <i className="fa fa-user-circle"></i> Administrador
                  </button>
                      <div className="dropdown-content" style={{right: 0}}>
                          <a href="#">node.adm@gmail.com</a>
                          <a href="#"><small></small></a>
                          <a href="#" onClick={logoutClick}>Logout</a>
                  </div>
              </div>
              <div className="dropdown">
                  
                  <button className="dropbtn">
                      <i className="fa fa-shopping-cart"></i>
                  </button>
                      <div className="dropdown-content" style={{right: 0}}>
                          <a href="#">
                              <b>QR</b><br/>
                              x 0
                          </a>
                          <a href="#">
                              <b>RSVP</b><br/>
                              x 0
                          </a>
                          <a href="#">
                              <b>STD</b><br/>
                              x 0
                          </a>
                      <a href="#">Fazer pedido</a>
                  </div>
              </div>

          </div>

        </div>

        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        
      </Router>
    </AppContext.Provider>
  )

}

export default App
