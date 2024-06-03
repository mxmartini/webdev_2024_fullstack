    
function FiltroEvento({ onFinalizado }:FiltroEventoProps){

    function pesquisarClick(){
  
        fetch("http://localhost:3000/eventos")
        .then(res => res.json())
        .then(data => pesquisarFinalizado(data))
        .catch(err => console.warn(err))
    }

    function pesquisarFinalizado(eventos:Evento[]){
        onFinalizado(eventos)
    }

    return (
        <>
            <fieldset style={{ margin: "20px 0" }}>
                <legend>Pesquisa de eventos</legend>
                
                <div style={{ padding: "20px 0" }}>
                    <label>Nome:</label>
                    <input name="nome" />
                </div>

                <div style={{ padding: "20px 0" }}>
                    <button onClick={pesquisarClick}>Pesquisar</button>
                </div>

            </fieldset>
        </>
    )
}

export default FiltroEvento