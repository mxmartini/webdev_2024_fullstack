import { useEffect, useState } from 'react'

type Evento = {
    id:number,
    nome:string,
    data:Date
}

function TabelaEvento(props: any) {
  
    const [eventos, setEventos] = useState([])
    const onLoad = props.onLoad;

    useEffect(() => {
        
    }, [])
    
    function dataPtBr(a: Date){ console.log();
        if (a) return new Date(new Date(a).toISOString().slice(0, 10)+" EDT").toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" });
    }

    return (
        <>
            <div style={{padding: "10px 0"}}>
                <button onClick={()=>{ setEventos(onLoad()) }}>Pesquisar</button>
            </div>
            <table border={props.border} cellPadding={props.cellPadding} cellSpacing={props.cellSpacing}>
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

export default TabelaEvento
