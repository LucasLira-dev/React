import { useState } from 'react';

function Condicional(){

    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');


    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(e){
        e.preventDefault();
        setUserEmail('');
    }

    return(
        <div>
            <h2> cadastre o seu email </h2>
            <form >
                <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Cadastrar</button>
            </form>
            {userEmail && ( 
                <div>
                    <p> O email cadastrado é: {userEmail} </p>
                    <button onClick={limparEmail}> Limpar email </button>
                </div>)}
        </div>
    )
}

export default Condicional;