import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from '../components/Form';
import Home from '../components/Home';
import About from './About';


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}>  </Route>
                <Route path="/form" element={ <Form />}></Route>
                <Route path="/sobre" element={ <About />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;