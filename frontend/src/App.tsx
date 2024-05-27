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
    .then(data => setEventos(data))
    .catch(err => console.warn(err))

  }, [])

  function dataPtBr(a: Date){ console.log();
    if (a) return new Date(new Date(a).toISOString().slice(0, 10)+" EDT").toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" });
  }
  return (
    <>
      <h1>Eventos</h1>
      
      <table border={1} cellPadding={10} cellSpacing={1}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((e:Evento) => 
            <tr key={e.id}>
              <td>{e.nome}</td>
              <td>{dataPtBr(e.data)}</td>
            </tr> 
          )}
        </tbody>
        
      </table>
    </>
  )

}

export default App
