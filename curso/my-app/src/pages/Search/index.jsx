import '../../App.css';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import videos from '../../json/videos.json';    

function Search() {
  return (
    <>
    <Header/>
    <Container>
        <section className='flex flex-col pt-[68px]'>
            <h2 className='text-center'> Pesquisar </h2>
            <VideoList videos={videos}/>
        </section>
    </Container>
    <Footer />

    </>

  );
}

export default Search;