import { forwardRef, useImperativeHandle, useState } from 'react'

const TabelaEvento = forwardRef(({ border, cellPadding, cellSpacing }: TabelaEventoProps, ref) => {
  
    const [eventos, setEventos] = useState(new Array<Evento>)

    useImperativeHandle(ref, () => ({ carregar }))

    function carregar(eventos:Evento[]): void {
        setEventos(eventos)
    }

    function dataPtBr(a: Date){ console.log();
        if (a) return new Date(new Date(a).toISOString().slice(0, 10)+" EDT").toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" });
    }

    return (
       
        <table border={border} cellPadding={cellPadding} cellSpacing={cellSpacing}>
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
    )
})

export default TabelaEvento