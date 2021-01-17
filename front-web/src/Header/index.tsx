import './style.css';
import { ReactComponent as Logo } from './logo.svg';
function Header() {
    return (
        <>
            <nav className="header-container">
                <Logo />
                <span className="text-logo">plataforma para aceleração de oportunidades</span> 
                <span className="header-button">Login</span>
            </nav>
        </>
    );
}

export default Header;
