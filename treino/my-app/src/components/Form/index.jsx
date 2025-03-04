import { Link } from "react-router-dom";

function Form(){


    return(
        <form>
            <input type="text" placeholder="Nome" id="tnome" />
            <input type="text" placeholder="Sobrenome" id="tsobrenome" />
            <input type="number" placeholder="Idade" id="tidade" />
            <button id="btn_dados"> ver dados </button>

            <Link to="/"> Voltar </Link>
        </form>
    )

   
    
}

export default Form;