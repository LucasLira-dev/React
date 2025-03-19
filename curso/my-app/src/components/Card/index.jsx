import { Link } from "react-router-dom";
import "../../App.css";

function Card({id}){
    return (
        <section className="flex justify-start">
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className="rounded-lg w-[225px] transform hover:scale-[1.15] transition-transform duration-300 " />
            </Link>
        </section>
    )
}

export default Card;