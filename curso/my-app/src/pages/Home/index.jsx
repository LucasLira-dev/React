import '../../App.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Category, { categories, filterCategory } from '../../components/Category'
import { useState } from 'react'



function Home() {

  function pegarNome(event){
    setNome(event.target.value)//setNome é uma função que muda o valor de nome
  }

  const [nome, setNome] = useState('a') //nome é uma variável que guarda o valor do input e setNome é uma função que muda o valor de nome. O useState é um hook que cria um estado 

  return (
    <>
      <Header/>
      <Banner image='favoritos'/> 
      <Container>

      <input 
        type="text"
        placeholder='Nome' 
        onChange={pegarNome}
      />

      <h2> {nome} </h2>
       {/* {
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
      }   */}


        
      </Container>
      <Footer/>
    </>
  )
}

export default Home
