
function Lista({itens}){
    return(
        <>
            <h3> lista de coisas boas </h3>
            {itens.length > 0?(
            itens.map((item, index)=>(
                <p key={index}> {item} </p>
           ))): (
            <p> Nenhum item na lista </p>
           )}
        </>
    )
}

export default Lista;