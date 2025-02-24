import "../../App.css";

function Card({id}){
    return (
        <section className="flex justify-start">
            <a
             href={`https://www.youtube.com/watch?v=${id}`}
             rel="noreferrer noopener" 
             target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className="rounded-lg w-[225px]" />
            </a>
        </section>
    )
}

export default Card;