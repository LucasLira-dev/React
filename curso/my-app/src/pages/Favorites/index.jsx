import '../../App.css';
import Header from '../../components/Header';  
import Footer from '../../components/Footer';
import Container from '../../components/Container'; 
import VideoList from '../../components/VideoList';
import { useFavoritesContext } from '../../contexts/Favorites';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Favorites(){

    const { favorite } = useFavoritesContext();
    return(
        <>
        <ScrollToTopButton/>
        <Header/>
        <Container>
            <section className='pt-20 flex justify-center items-center flex-col'>
                <h2> Meus favoritos </h2>
            { <VideoList videos={favorite} emptyHeading="sem favoritos"/> }
            </section>
        </Container>
        <Footer/>
        </>
    )
}

export default Favorites;