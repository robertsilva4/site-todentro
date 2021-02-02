import React from 'react';
import Navbar from '../Navbar';
import  Imageexclamacao from './image-exclamacao.svg';
import JobsList from './JobsList';
import IconSearchJob from './icon_search_jobs.svg';
import './style.css';

function Vagas() {

    // const [job, setJob] = useState<Job[]>([]);

    // useEffect(()=>{
    //     fetchVagas()
    //     .then(response=> setJob(response.data.data))
    //     .catch(error => console.log(error))
    // })

    return (
        <>
            <Navbar />
            <div className="vagas-content">
                <img src={Imageexclamacao} alt="imagem atenção para proucuarar vagas" className="image-exclamacao" />
                <p className="vagas-title">Encontre a Vaga Ideal</p>

                <form className="form-pesquisa">
                    <input className="input-pesquisa" value="" placeholder="Vagas"/>
                    <input className="input-pesquisa" value="" placeholder="Digite um cargo ou palavra-chave "/>
                    <input className="input-pesquisa" value="" placeholder="Digite uma Cidade" />
                    <button className="pesquisa-form-button"><img src={IconSearchJob} alt="" width="20" /></button>
                </form>
                <JobsList/>
                
            </div>
        </>
    );
}

export default Vagas;
