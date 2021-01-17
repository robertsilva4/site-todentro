import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Fundo } from './fundo-image.svg';
import './style.css';
function Login() {
    return (
        <>
            <Fundo className="image-fundo-login" />
            <div className="login-content">
                <h1 className="login-content-title">Bem vindo de volta!</h1>
                <form className="form-login">
                    <input className="input-login" value="Login" />
                    <input className="input-login" value="Senha" />
                    <Link to="/vagas" className="login-form-button">Próximo</Link>
                </form>

            </div>
        </>
    );
}

export default Login;
