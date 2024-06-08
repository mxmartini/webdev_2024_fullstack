
import { useContext, useState } from "react"
import AppContext from "../AppContext"
import { useNavigate } from "react-router-dom"

import "../assets/login/login.css"

type FormLogin = {
  email:string,
  senha:string
}

function Login() {

    const { setUser } = useContext(AppContext)
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [form, setForm] = useState<FormLogin>({
      email: "",
      senha: ""
    })

    function inputChange(e: React.ChangeEvent<HTMLInputElement>){
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function loginSubmit(e: React.FormEvent){

        e.preventDefault()
        try {

          if(!(form.email == "node.adm@gmail.com" && form.senha == "123"))
            throw Error("Usuário e/ou senha inválidos")

          const user = { nome: "Administrador", email: "node.adm@gmail.com" }
          
          sessionStorage.setItem("user", JSON.stringify(user))
          setUser(user)
          
          navigate("/home")
        }
        catch(e:unknown){
          setError((e as Error).message)
        }
    }
  
    return (
      <form id="login-form" onSubmit={loginSubmit}>
        <fieldset>
          <legend>Login</legend>
          <span className="error">{error}</span><br/>
              
          <label htmlFor="email">E-mail:</label><br/>
              <input type="text" id="email" name="email" onChange={inputChange} /><br/><br/>
              
              <label htmlFor="senha">Senha:</label><br/>
              <input type="password" id="senha" name="senha" onChange={inputChange} /><br/><br/>

              <input type="submit" id="btnlogin" value="Log In" className="btn-primary" />
        </fieldset>
      </form>
    )
}

export default Login
