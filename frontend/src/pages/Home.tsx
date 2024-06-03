import { useRef } from "react"
import FiltroEvento from "../components/FiltroEvento"
import TabelaEvento from "../components/TabelaEvento"

function Home() {
  
    const tb = useRef<TabelaEvento>()

    function onFinalizadoHandler(eventos:Evento[]){
      tb.current?.carregar(eventos) 
    }

    return (
      <>
        <h1>Eventos</h1>
  
        <FiltroEvento onFinalizado={onFinalizadoHandler} />

        <TabelaEvento ref={tb} border={1} cellPadding={10} cellSpacing={1}></TabelaEvento>
      </>
    )
}

export default Home
