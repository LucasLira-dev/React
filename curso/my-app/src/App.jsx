
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/Banner'
import Container from './components/Container'
import Card from './components/Card'
import videos from "./json/db.json"

function App() {

  return (
    <>
      <Header/>
      <Banner image='home'/> 
      <Container>
           
        <h2 className='flex justify-center font-bold'> Geografia </h2>

        <section className='flex gap-1 flex-wrap justify-center'>
          {
            videos.map((video)=>{
              return <Card id={video.id} key={video.id}/>
            })
          }
        </section>
        
      </Container>
      <Footer/>
    </>
  )
}

export default App
