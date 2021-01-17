import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';

function Home() {
    return (
        <>
            <div className="home-signup-container">
                <Header />
                <div className="home-signup-container-iam">
                    <p className="home-signup-container-text">Já pensou em conseguir o primeiro emprego<br />
                        da sua carreira sem ao menos sair
                        de casa?<br />
                        <strong>Você está dentro do lugar certo pra isso.</strong></p>
                    <div className="home-butons">
                        <Link to="/cadastro" className="home-butons-type">Sou uma empresa</Link>
                        <Link to="/cadastro" className="home-butons-type">Sou estudante</Link>
                    </div>
                </div>
            </div>
            <div className="home-operation">
                <div className="home-operation-session-one">
                    <h1 className="home-operatio-title">Como Funciona o Tô Dentro<br />
                        para o jovem estudante?</h1>
                </div>
                <div className="home-operation-session-two">
                    <div className="home-operatio-crie-perfil">
                        <h3>Crie seu Perfil</h3>
                        <p>Aqui é o lugar onde o seu sonho do primeiro emprego começa!
                        Nos conte mais sobre você e crie um perfil único para que
                        as empresas possam conhecer a sua personalidade.
                                Com o perfil pronto é só partir pra busca.</p>
                    </div>
                    <div className="home-operatio-crie-perfil">
                        <h3>Busque</h3>
                        <p>Procure por empresas que chamem a sua atenção e
                        veja se são compatíveis com o seu perfil.
                        Deu match? É só cair pra dentro!
                        Ainda não tem as qualificações necessárias?
                                Busque um de nossos cursos para complementar o seu perfil. .</p>
                    </div>
                    <div className="home-operatio-crie-perfil">
                        <span className="home-operation-crie-perfil-image"></span>
                        <h3>Tá dentro!</h3>
                        <p>Achou a vaga perfeita, você atende os requisitos,
                        fez a entrevista online e a empresa está pronta pra te receber?
                                Pronto, você tá dentro do seu primeiro emprego! .</p>
                    </div>
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
            <Footer />
        </>
    );
}

export default Home;
