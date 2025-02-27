import '../../App.css';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Watch(){
    return(
      <>
        <Header />
        <Container>
            <section className='pt-20 flex justify-center'> 
                <iframe width="854" height="480" src="https://www.youtube.com/embed/KsFLXOTflsM?si=Z6T8ROFGC4NKjQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe> 
            </section>
        </Container>
        <Footer/>
       
      </>
       
    )
}

export default Watch;