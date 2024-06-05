
// MODAL
var modal = document.getElementById("modal");
var register = document.getElementById("register");
var close = document.getElementsByClassName("close")[0];

register.onclick = () => {
  modal.style.display = "block";
}
close.onclick = () => {
  modal.style.display = "none";
}
window.onclick = (e) => {
  if (e.target == modal)
    modal.style.display = "none";
}

// MODAL DADOS
var id = document.getElementById("id");
var nome = document.getElementById("nome");
var data = document.getElementById("data");
var ativo = document.getElementById("ativo");

function editOpen(evento){
  modal.style.display = "block";
  
  id.value = evento.id;
  nome.value = evento.nome;
  data.value = new Date(evento.data).toISOString().slice(0, 10);
  ativo.checked = evento.ativo;
}

function editClick(id) {
    
  fetch(`http://localhost:3000/eventos/${id}`)
  .then( (res) => res.json() )
  .then( (json) => { editOpen(json) } )
  .catch( (err) => console.warn('Algo deu errado.', err) );
}

function removeClick(id) {
    
  fetch(`http://localhost:3000/eventos/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
})
.then((res) => res.json())
.then((json) => { updateDone(json) })
.catch((err) => console.warn(err))
}

// MODAL SUBMIT
var save = document.getElementById("save");
var form = document.getElementById("form");

form.onsubmit = (e) => {
    e.preventDefault();

    let url = "http://localhost:3000/eventos"
    
    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((agg, [key, value]) => ({
        ...agg,
        [key]:value
    }), {});
    
    fetch(url, {
        method: id.value ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((json) => { updateDone(json) })
    .catch((err) => console.warn(err))
    
}

function updateDone(evento) {

  console.log(evento);

  var btnsearch = document.getElementById("btnsearch");
  btnsearch.click();
  close.click();
} 