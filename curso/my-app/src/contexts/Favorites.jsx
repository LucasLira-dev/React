import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorites] = useState([]);

    return(
        <FavoritesContext.Provider value={{ favorite, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}


//Hook personalizado para manipular os favoritos

export function useFavoritesContext(){
    const { favorite, setFavorites } = useContext(FavoritesContext);

   function addFavorite(newFavorite){
       //Verifica se o novo favorito já está na lista
       
       const repeatedFavorite= favorite.some((item)=> item.id === newFavorite.id);

       //nova lista recebe lista anterior
         let newList = [...favorite];

       //verificar se nao tem repetido e adicionar na lista de favoritos
       if(!repeatedFavorite){
           newList.push(newFavorite);
           return setFavorites(newList);
       } 
       
       //se tiver repetido, remover da lista de favoritos
       newList= favorite.filter((fav)=> fav.id !== newFavorite.id);
       return setFavorites(newList);
    }

    return{
        favorite,
        addFavorite
    }
}

