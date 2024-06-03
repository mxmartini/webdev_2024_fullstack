import { useContext } from "react"
import AppContext from "../AppContext"
import { useNavigate } from "react-router-dom"

function Index() {

  const { user, setUser } = useContext(AppContext)
  const navigate = useNavigate()

  function loginClick(){

    const user = { nome: "Max", email: "max@mail.com" }
    sessionStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate("/home")
  }

  function logoutClick(){

    sessionStorage.removeItem("user")
    setUser(null)
  }
  
  return (
    <>
      <h1>Index</h1>
      <p>
        { user?.email }
      </p>
      {!user 
      ? <button onClick={loginClick}>Entrar</button>
      : <button onClick={logoutClick}>Sair</button>
      }
      
    </>
  )
}

export default Index