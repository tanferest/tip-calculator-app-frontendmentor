import logo from '../images/logo.svg';
import '../styles/Header.scss'

function Header () {
    return <header className='header'>
        <img src={logo} alt="APP Logo"/>
    </header>
}

export default Header;