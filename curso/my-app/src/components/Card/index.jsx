import { Link } from "react-router-dom";
import "../../App.css";
import iconFavorite from './favorite.png';
import iconUnFavorite from './unfavorite.png';
import { useFavoritesContext } from "../../contexts/Favorites";


function Card({id}){

    const {favorite, addFavorite} = useFavoritesContext();
    const isFavorite = favorite.some((item)=> item.id === id);
    const icone= isFavorite ? iconUnFavorite : iconFavorite;

    return (
        <section className="flex flex-col items-end justify-end">
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className="rounded-lg w-[225px] transform hover:scale-[1.15] transition-transform duration-300 " />
            </Link>
            <figure className="absolute w-[35px] h-[35px] bg-[#00000050] rounded-[5px] p-[2px] mr-[5px] mb-[10px] hover:bg-[#00000080] transition-all duration-300 cursor-pointer">

                <img 
                     src={icone}
                     alt="Icone"
                     onClick={()=> addFavorite({id})} 
                 />
            </figure>
        </section>
    )
}

export default Card;