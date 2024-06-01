import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Index from "./pages/Index"

function App() {
  
  return (
    <Router>
    <div className="content">
  
      <nav className="menu">
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </nav>
  
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
  
    </div>
  </Router>
  )

}

export default App
