import Footer from '../Footer';
import './style.css';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-operation">
                    <div className="home-operation-session-one">
                        
                        <h1 className="home-operatio-title">Como Funciona o Tô Dentro<br />
                        para o jovem estudante?</h1>
                    </div>
                </div>
                <div className="abolt-container">
                    <h1 className="abolt-title">Sobre nós</h1>
                    <p className="abolt-text">
                        A Tô Dentro! nasceu como uma plataforma para aceleração de oportunidades que busca não <br />só aproximar candidato e vaga, mas qualificar jovens e servir de trampolim para sua<br /> evolução no mercado de trabalho.<br />
                    Aqui você cria o seu perfil, faz suas buscas personalizadas, se qualifica para as empresas que<br /> têm interesse e tá dentro!<br />
                    A Tô Dentro! quer trazer mais agilidade, mais transparência e desafiar você, jovem, a<br /> construir sua carreira e ajudar você, empresário, a encontrar a melhor opção de candidato.<br /><br />

                    Cai pra dentro! :)
                </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
