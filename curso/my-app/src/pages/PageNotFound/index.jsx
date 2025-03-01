import '../../App.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import erro404 from "./erro404.png";

function PageNotFound(){
    return(
        <>
            <Header/>
            <section className='pt-[84px] w-full h-[93vh] bg-[#222] text-[#fff] flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-bold mb-4'> ops! Página não localizada </h2>
                <img src={erro404} alt="logo da página não localizada"/>
            </section>
            <Footer/>
        </>
    )
}

export default PageNotFound;