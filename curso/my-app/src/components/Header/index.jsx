
/*import styles from './Header.module.css'; */
import { Link } from 'react-router-dom';
import '../../App.css';

function Header(){
    return (
        <header className="bg-black border-b-2 border-red-600 flex justify-around items-center  w-full fixed h-16 left-0 z-50 ">
           <Link to="/">   
                 <span  className="text-4xl font-bold text-red-700"> LucasFlix</span>
           </Link> 
         
           <nav>
                <Link to="/" className='text-white no-underline px-2 text-2xl'>Home </Link>
            
                <Link to="/search" className='text-white no-underline px-2 text-2xl'> Buscar </Link>

                <Link to="/favorites" className='text-white no-underline px-2 text-2xl'> Favoritos </Link>
           </nav>
        </header>

    )
}

export default Header;