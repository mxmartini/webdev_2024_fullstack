import { forwardRef, useImperativeHandle, useState } from 'react'
import { Link } from 'react-router-dom'

const TabelaEvento = forwardRef((_, ref) => {
  
    const [eventos, setEventos] = useState(new Array<Evento>)

    useImperativeHandle(ref, () => ({ carregar }))

    function carregar(eventos:Evento[]): void {
        setEventos(eventos)
    }

    function dataPtBr(a: Date){ console.log();
        if (a) return new Date(new Date(a).toISOString().slice(0, 10)+" EDT").toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" });
    }

    return (
        <table id="events">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Ativo</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                {eventos.map((e:Evento) => 
                <tr key={e.id}>
                    <td>{e.nome}</td>
                    <td>{dataPtBr(e.data)}</td>
                    <td style={e.ativo ? { color: "green" } : { color: "red" } }>
                        {e.ativo ? <>&#10004;</> : <>&#10008;</> }
                    </td>
                    <td>
                        <div className="dropdown">
        
                            <button className="dropbtn">
                                <i className="fa fa-ellipsis-v"></i>
                            </button>
                            <div className="dropdown-content" style={{right: 0}}>
                                <a href="#" onClick={() => { console.log("Editar") }}>Editar</a>
                                <a href="#" onClick={() => { console.log("Remover") }}>Remover</a>
                                <Link to={{pathname: `/home/${e.id}`}}>Ver detalhes</Link>
                            </div>
                        </div>
                    </td>
                </tr> 
                )}
            </tbody>
        </table>
    )
})

export default TabelaEvento
