import Form from '../Form';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className={styles.header}>
        <Link to="/form">Form</Link>
        <Link to="/sobre"> sobre </Link>
    </header>
    )
}

export default Header;

