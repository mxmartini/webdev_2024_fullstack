    
function FiltroEvento({ onFinalizado }:FiltroEventoProps){

    function inputChange(){

    }

    function pesquisarSubmit(e: React.FormEvent){
        e.preventDefault();
  
        fetch("http://localhost:3000/eventos")
        .then(res => res.json())
        .then(data => pesquisarFinalizado(data))
        .catch(err => console.warn(err))
    }

    function pesquisarFinalizado(eventos:Evento[]){
        onFinalizado(eventos)
    }

    return (
        <form id="search-form" onSubmit={pesquisarSubmit}>
            <div id="filters">
                <fieldset>
                    <legend>Pesquisa de eventos</legend>
                    <div className="row">
                        <div>
                            <label htmlFor="nome">Nome:</label><br/>
                            <input type="text" id="nome" name="nome" onChange={inputChange}/>
                        </div>
                        <div>
                            <label htmlFor="data_ini">Data inicial:</label><br/>
                            <input type="date" id="data_ini" name="data_ini" onChange={inputChange}/>
                        </div>
                        <div>
                            <label htmlFor="data_fin">Data final:</label><br/>
                            <input type="date" id="data_fin" name="data_fin" onChange={inputChange}/>
                        </div>
                        <div>
                            <label htmlFor="ativo">Ativo?</label><br/>
                            <select id="ativo" name="ativo">
                                <option value="">...</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <button id="btnsearch" className="btn-primary"><i className="fa fa-search"></i> Pesquisar</button>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}

export default FiltroEvento