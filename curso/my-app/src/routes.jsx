
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Watch from './pages/Watch';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import FavoritesProvider from './contexts/Favorites';
import VideoCadastre from './pages/VideoCadastre';

function AppRoutes(){
    return(
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home />}>  </Route>
                    <Route path="/search" element={ <Search />}></Route>
                    <Route path="/watch/:id" element={ <Watch />}></Route>
                    <Route path="/favorites" element={ <Favorites />}>
                    </Route>
                    <Route path="/cadastre" element={ <VideoCadastre />}></Route>
                    <Route path="*" element={ <PageNotFound />}></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;