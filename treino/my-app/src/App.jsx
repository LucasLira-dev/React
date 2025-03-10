
import { useState } from 'react';
import './App.css'
import Lista from './components/Eventos/Lista'
import AppRoutes from './Pages/routes'
import SeuNome from './components/Eventos/SeuNome';
import Saudacao from './components/Eventos/Saudacao';



function App() {

  const [nome, setNome] = useState('');
 
  return (
    <>
       
       <AppRoutes/>
       <h1> Slate Lift </h1>
       <SeuNome setNome={setNome}/>
      {nome}
      <Saudacao nome={nome}/>
    </>
  
  )
}

export default App
