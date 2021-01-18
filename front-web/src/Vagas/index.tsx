import React, { useEffect, useState} from 'react';
import { fetchVagas } from '../api';
import Navbar from '../Navbar';
import { ReactComponent as Imageexclamacao } from './image-exclamacao.svg';
import JobsList from './JobsList';
import './style.css';
import { Job } from './types';


function Vagas() {

    const [job, setJob] = useState<Job[]>([]);

    useEffect(()=>{
        fetchVagas()
        .then(response=> setJob(response.data.data))
        .catch(error => console.log(error))
    })

    return (
        <>
            <Navbar />
            <div className="vagas-content">
                <Imageexclamacao className="image-exclamacao" />
                <p className="vagas-title">Encontre a Vaga Ideal</p>

                <form className="form-pesquisa">
                    <input className="input-pesquisa" value="Login" />
                    <input className="input-pesquisa" value="Senha" />
                    <input className="input-pesquisa" value="Digite uma cidade" />
                    <button className="pesquisa-form-button">pesquisar</button>
                </form>
                <JobsList  
                    Jobs = {job}
                />
                
            </div>
        </>
    );
}

export default Vagas;
