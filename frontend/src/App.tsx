import { useEffect, useState } from 'react'
import TabelaEvento from './TabelaEvento'

function App() {
  
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    // EXECUTA NO PRIMEIRO LOAD DA PAGINA
    fetch("http://localhost:3000/eventos")
    .then(res => res.json())
    .then(data => setEventos(data))
    .catch(err => console.warn(err))

  }, [])

  return (
    <>
      <h1>Eventos</h1>
      
      <TabelaEvento border="1" cellPadding="10" cellSpacing="1" onLoad={() => eventos}></TabelaEvento>
    </>
  )

}

export default App
