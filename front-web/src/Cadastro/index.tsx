import React from 'react';
import { ReactComponent as Fundo } from './fundo-image.svg';
import './style.css';
function Cadastro() {
    return (    
        <>
        <Fundo className= "image-fundo"/>
            <div className="cadastro-content">
                <h1 className="cadastro-content-title">Crie sua conta!</h1>
                <form className="form-cadastro">
                    <input className="input-cadastro" value="Login"/>
                    <input className="input-cadastro" value="E-mail"/>
                    <input className="input-cadastro" value="Senha"/>
                    <button className="cadastro-form-button">Próximo</button>
                </form>
                
            </div>
        </>
    );
}

export default Cadastro;
