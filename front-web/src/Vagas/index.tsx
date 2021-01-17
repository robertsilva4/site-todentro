import Header from '../Header';
import {ReactComponent as Imageexclamacao} from './image-exclamacao.svg';
import './style.css';
function Login() {
    return (    
        <>
        <Header />
        <div className="vagas-content">
            <Imageexclamacao  className="image-exclamacao"/>
            <p className="vagas-title">Encontre a Vaga Ideal</p>
        </div>
        </>
    );
}

export default Login;
