import { useState } from "react"

function FormEvento2({ evento }: { evento?:FormEvento }){

    const [form, setForm] = useState<FormEvento>(evento || {
        id: 0,
        nome: "",
        data: "",
        ativo: true
    })

    function inputChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.type == "checkbox" ? e.target.checked : e.target.value 
        setForm(prev => ({ ...prev, [e.target.name]: value }))
    }

    function formSubmit(e: React.FormEvent){

        e.preventDefault()
        
        console.log(form)
    }

    return (
        <form id="form-event" onSubmit={formSubmit}>
            <fieldset>
            <legend>Cadastrar evento</legend>
                <span className="error"></span><br/>
                <input type="hidden" id="id" name="id" value={form.id} onChange={inputChange} />

                <label htmlFor="nome">Nome:</label><br/>
                <input type="text" id="nome" name="nome" value={form.nome} onChange={inputChange} /><br/><br/>
                
                <label htmlFor="data">Data:</label><br/>
                <input type="date" id="data" name="data" value={form.data} onChange={inputChange} /><br/><br/>
                
                <label htmlFor="ativo">Ativo:</label><br/>
                <input type="checkbox" id="ativo" name="ativo" checked={form.ativo} onChange={inputChange} /><br/><br/>

                <input type="submit" id="save" value="Salvar" className="btn-primary" />
            </fieldset>
        </form> 
    )
}

export default FormEvento2