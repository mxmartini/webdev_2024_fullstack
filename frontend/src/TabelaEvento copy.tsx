import { forwardRef, useImperativeHandle, useState } from 'react'

const TabelaEvento = forwardRef((props:any, ref) => {
  
    const [eventos, setEventos] = useState(Array<Evento>)
    
    useImperativeHandle(ref, () => ({ carregar }));

    function carregar(eventos:Evento[]) {
            
        setEventos(eventos);
    } 
    
    function dataPtBr(a: Date) {
        if (a) return new Date(new Date(a).toISOString().slice(0, 10)+" EDT").toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" });
    }

    return (
        <>
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
})

export default TabelaEvento
