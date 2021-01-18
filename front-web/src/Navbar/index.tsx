import './style.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar-container">
            <Link to="/vagas"><Logo /></Link> 
            <span className="text-logo-navbar">plataforma para aceleração de oportunidades</span>
            <span className="navbar-text">Nome</span>
            <span className="navbar-button"></span>
        </nav>
    );
}

export default Navbar;
