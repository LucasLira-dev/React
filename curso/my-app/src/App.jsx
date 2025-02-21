
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/Banner'
import Container from './components/Container'

function App() {

  return (
    <>
      <Header/>
      <Banner image='home'/> 
      <Container>
          <h1 className='flex justify-center'> oi</h1>
      </Container>
      <Footer/>
    </>
  )
}

export default App
