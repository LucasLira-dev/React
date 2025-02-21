
/*import styles from './Header.module.css'; */
import '../../App.css';

function Header(){
    return (
        <header className="bg-black border-b-2 border-red-600 flex justify-around items-center  w-full fixed h-16 left-0 "> 
           <span  className="text-4xl font-bold text-red-700"> LucasFlix</span>

           <nav>
                <a href="/" className='text-white no-underline px-2 text-2xl'>Home</a>
                <a href="/" className='text-white no-underline px-2 text-2xl'> Assistir </a>
           </nav>
        </header>

    )
}

export default Header;