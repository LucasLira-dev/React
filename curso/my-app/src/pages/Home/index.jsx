import '../../App.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Category, { categories, filterCategory } from '../../components/Category'



function Home() {

  return (
    <>
      <Header/>
      <Banner image='favoritos'/> 
      <Container>


       {
        categories.map((category, index)=>{
          return(
            <Category category={category} key={index}>
              {
                filterCategory(index).map((video)=>{
                  return <Card id={video.id} key={video.id}/>
                })
              }
            </Category>
          )
        })
      }  


        
      </Container>
      <Footer/>
    </>
  )
}

export default Home
