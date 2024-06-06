import { useContext } from "react"
import AppContext from "../AppContext"
import { Link, useNavigate } from "react-router-dom"


function Header () {

    const { user, setUser } = useContext(AppContext)
    const navigate = useNavigate()

    function loginClick(){

        navigate("/login")
    }

    function logoutClick(){

        sessionStorage.removeItem("user")
        setUser(null)

        navigate("/login")
    }
  
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        <div className="header">
          
          <div className="options">

              { !user 
              ? <button onClick={()=> { loginClick() }}>Login</button>
              : 
              <>
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
                        <i className="fa fa-user-circle"></i> {user?.nome}
                    </button>
                    <div className="dropdown-content" style={{right: 0}}>
                        <a href="#">{user?.email}</a>
                        <a href="#"><small></small></a>
                        <a href="#" onClick={logoutClick}>Logout</a>
                    </div>
                </div>
              </> }
              
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
        </>
    )
}

export default Header
