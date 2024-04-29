// onsubmit = function(){

//     fetch('http://localhost:3000/eventos')
//     .then( (res) => res.json() )
//     .then( (json) => carregarEventos(json) )
//     .catch( (err) => console.warn('Algo deu errado.', err) );
// }

// function carregarEventos(eventos){

//     document.getElementById('events').getElementsByTagName('tbody').item(0).innerHTML = "";

//     eventos.forEach(evento => {
//         const tr = document.createElement("tr");
//         tr.innerHTML = `
//             <td>${evento.nome}</td>
//             <td>${dataPtBr(evento.data)}</td>
//             <td style="color:${evento.ativo ? 'green' : 'red'}">
//                 ${evento.ativo ? '&#10004' : '&#10008'}
//             </td>
//             <td>[...acoes]</td>`;
//         document.getElementById('events').getElementsByTagName('tbody').item(0).appendChild(tr);
//     });
// }

// function dataPtBr(a){
//     return new Date(a).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" });
// }