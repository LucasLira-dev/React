export const dadosArray=[
    {
        nome: "Lucas",
        idade: 20,
        profissão: "Desenvolvedor"
    },
    {
        nome: "Isaura",
        idade: 46,
        profissão: "Dona de casa"
    },
    {
        nome: "Alexandre",
        idade: 29,
        profissão: "Formado em educação física"
    }
]

function Dados() {
    return (
        <>
            {dadosArray.map((dados, index) => {
                return (
                    <div>
                        <p>Nome: {dados.nome}</p>
                        <p>Idade: {dados.idade}</p>
                        <p>Profissão: {dados.profissão}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Dados;