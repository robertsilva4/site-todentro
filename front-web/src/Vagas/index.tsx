import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { ReactComponent as Imageexclamacao } from './image-exclamacao.svg';
import './style.css';
function Login() {
    return (
        <>
            <Header />
            <div className="vagas-content">
                <Imageexclamacao className="image-exclamacao" />
                <p className="vagas-title">Encontre a Vaga Ideal</p>

                <form className="form-pesquisa">
                    <input className="input-pesquisa" value="Login" />
                    <input className="input-pesquisa" value="Senha" />
                    <input className="input-pesquisa" value="Digite uma cidade" />
                    <Link to="/" className="pesquisa-form-button">pesquisar</Link>
                </form>
            </div>
        </>
    );
}

export default Login;
