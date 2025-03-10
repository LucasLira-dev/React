import { Link } from "react-router-dom";
import { useState } from "react";

function Form(){

    function meuCadastro(event){
        event.preventDefault()

        console.log(nome)
      
    }

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [idade, setIdade] = useState()

    return(
        <form onSubmit={meuCadastro}>
            <input type="text" placeholder="Nome" id="tnome"  onChange={(e)=> setNome(e.target.value)} />
            <input type="text" placeholder="Sobrenome" id="tsobrenome" onChange={(e)=> setSobrenome(e.target.value)} />
            <input type="number" placeholder="Idade" id="tidade" onChange={(e)=> setIdade(e.target.value)} />
            <button id="btn_dados"> ver dados </button>

            <p> Nome: {nome} </p>
            <p> Sobrenome: {sobrenome}</p>
            <p> Idade: {idade}</p>
            <Link to="/"> Voltar </Link>
        </form>
    )
  
}

export default Form;