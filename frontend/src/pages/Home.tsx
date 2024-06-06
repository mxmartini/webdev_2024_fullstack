import { useRef } from "react"
import FiltroEvento from "../components/FiltroEvento"
import TabelaEvento from "../components/TabelaEvento"

import "../assets/home/home.css"
import Header from "../components/Header"

function Home() {
  
    const tb = useRef<TabelaEvento>()

    function onFinalizadoHandler(eventos:Evento[]){
      tb.current?.carregar(eventos) 
    }

    return (
      <>
        <Header />
        
        <div className="event-container">
          
          <h1>Eventos</h1>

          <FiltroEvento onFinalizado={onFinalizadoHandler} />

          <button id="register" className="btn-primary"><i className="fa fa-plus"></i> Cadastrar</button>

          <TabelaEvento ref={tb}></TabelaEvento>

        </div>
      </>
    )
}

export default Home
