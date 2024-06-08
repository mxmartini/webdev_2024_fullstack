import { useRef } from "react"
import FiltroEvento from "../components/FiltroEvento"
import TabelaEvento from "../components/TabelaEvento"

import Header from "../components/Header"
import Modal from "../components/Modal/Modal"
import FormEvento from "../components/FormEvento"

import "../assets/home/home.css"


function Home() {
  
    const tb = useRef<TabelaEvento>()
    const modal = useRef<any>()
    
    function filtroFinalizado(eventos:Evento[]){
      tb.current?.carregar(eventos) 
    }

    function registerClick(){
      modal.current.abrir()
    }

    return (
      <>
        <Header />
        
        <div className="event-container">
          
          <h1>Eventos</h1>

          <FiltroEvento onFinalizado={filtroFinalizado} />

          <button id="register" className="btn-primary" onClick={registerClick} ><i className="fa fa-plus"></i> Cadastrar</button>

          <TabelaEvento ref={tb}></TabelaEvento>

          <Modal ref={modal}>

            <FormEvento />
            
          </Modal>

        </div>
      </>
    )
}

export default Home
