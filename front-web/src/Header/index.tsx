import './style.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className="header-container">
            <Logo />
            <span className="text-logo">plataforma para aceleração de oportunidades</span>
            <Link to="/login" className="header-button">Login</Link >
        </nav>
    );
}

export default Header;
