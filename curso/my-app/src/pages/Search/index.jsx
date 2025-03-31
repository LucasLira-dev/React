import '../../App.css';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import SearchVideoList from '../../components/SearchVideoList';
import videos from '../../json/videos.json';    

function Search() {
  return (
    <>
    <ScrollToTopButton/>
    <Header/>
    <Container>
        <section className='flex flex-col pt-[68px] w-full min-h-[600px]'>
            <h2 className='text-center'> Pesquisar </h2>
            <SearchVideoList videos={videos}/>
        </section>
    </Container>
    <Footer />

    </>

  );
}

export default Search;