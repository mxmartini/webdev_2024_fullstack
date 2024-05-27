import Button from "./components/Button.js"

export default function App() {
    
    return `
    <h1>
        Olá mundo
    </h1>

    <div>
        Bem vindo ao seu primeiro app front end
    </div>
    
    <br />

    <table id="tbeventos" border="1" width="300">
        <thead>
            <th>Nome</th>
            <th>Data</th>
        </thead>
        <tbody></tbody>
    </table>

    <br />
      
    ${ 
        Button({ value: "Pesquisar", onclick : () => { 
            
            $("#tbeventos tbody").clear();

            fetch("http://localhost:3000/eventos")
            .then(res => res.json())
            .then(data => {
                data.forEach((evento)=>{ 
                    
                    $("#tbeventos tbody").appendChild(
                        $$("tr", `
                            <td>${evento.nome}</td>
                            <td>${evento.data}</td>
                    `));
                });
            });
        }})
    }
    `
}
