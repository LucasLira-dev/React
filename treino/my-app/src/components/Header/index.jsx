import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import styles from './Header.module.css';


function Header(){
    return(
        <header className={styles.header}>
        <Link to="/form">Form</Link>
        <Link to="/sobre"> sobre </Link>
        <ul>
            <li>  <FaFacebook /> </li>
            <li>  <FaInstagram /> </li>
            <li> <FaTwitter/></li>
        </ul>
     
    </header>
    )
}

export default Header;

