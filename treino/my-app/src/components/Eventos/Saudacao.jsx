
function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        <>
          {nome && <h1> {gerarSaudacao(nome)} </h1>}
        </>
      
    )
}

export default Saudacao