import { useEffect, useState } from 'react'

type Evento = {
  id:number,
  nome:string,
  data:Date
}

function App() {
  
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    // EXECUTA NO PRIMEIRO LOAD DA PAGINA
    fetch("http://localhost:3000/eventos")
    .then(res => res.json())
    .then(data => { console.log(data); setEventos(data); })
    .catch(err => console.warn(err))

  }, [])

  return (
    <>
      <h1>Eventos</h1>
      
      <table border="1" cellPadding="3">
        
        {eventos.map((e:any) => 
          <tr key={e.id}>
            <td>{e.nome}</td>
            <td>{e.data}</td>
          </tr> 
        )}
        
      </table>
    </>
  )

}

export default App
