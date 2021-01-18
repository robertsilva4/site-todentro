import React, { useEffect} from 'react';
import { fetchVagas } from '../api';
import Navbar from '../Navbar';
import { ReactComponent as Imageexclamacao } from './image-exclamacao.svg';
import JobsList from './JobsList';
import './style.css';
function Vagas() {
    // const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetchVagas()
        .then(response=> console.log(response.data))
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
                <JobsList />
                
            </div>
        </>
    );
}

export default Vagas;
