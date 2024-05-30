import { useRef } from 'react'
import TabelaEvento from './TabelaEvento'

function App() {
  
  const tb = useRef<TabelaEvento>()

  function pesquisarClick(){

    // EXECUTA NO PRIMEIRO LOAD DA PAGINA
    fetch("http://localhost:3000/eventos")
    .then(res => res.json())
    .then(data => tb.current?.carregar(data))
    .catch(err => console.warn(err))
  }

  return (
    <>
      <h1>Eventos</h1>

      <div style={{ margin: "20px 0" }}>
        <button onClick={pesquisarClick}>Pesquisar</button>
      </div>

      <TabelaEvento ref={tb} border="1" cellPadding="10" cellSpacing="1"></TabelaEvento>
    </>
  )

}

export default App
