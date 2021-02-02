import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Logo from "./logo.svg";
import GirlImage from "./girl.svg";
import BackImage from "./fundo.svg";
import IconExclamation from "./icon_exclamation.svg";
import IconPofile from "./icon-profile.svg";
import IconSearch from "./icon_search.svg";
import IconInside from "./icon_inside.svg";
import "./style.css";

function Home() {
  return (
    <>
      <img
        className="BackImage"
        src={BackImage}
        alt="imagem to dentro de fundo"
      />
      <div className="home-signup-container">
        <nav className="header-container">
          <img className="header-logo" src={Logo} alt="logo todentro" />
          <span className="text-logo">
            plataforma para aceleração de oportunidades
          </span>
          <Link to="/login" className="header-button">
            Login
          </Link>
        </nav>
        <div className="home-signup-container-iam">
          <p className="home-signup-container-text">
            Já pensou em conseguir o primeiro emprego
            <br />
            da sua carreira sem ao menos sair de casa?
            <br />
            <strong>Você está dentro do lugar certo pra isso.</strong>
          </p>
          <div className="home-butons">
            <Link to="/cadastro" className="home-butons-type">
              Sou uma empresa
            </Link>
            <Link to="/cadastro" className="home-butons-type">
              Sou estudante
            </Link>
          </div>
        </div>
        <img
          src={GirlImage}
          className="imageGirl"
          alt="imagem de uma moça com um notebook nas mãos"
          width="600"
        />
      </div>
      <div className="home-operation">
        <div className="home-operation-session-one">
          <img className="icon-exclamation" src={IconExclamation} alt="icone de exclamação" />
          <h1 className="home-operatio-title">
            Como Funciona o Tô Dentro
            <br />
            para o jovem estudante?
          </h1>
        </div>
        <div className="home-operation-session-two">
          <div className="home-operation-steps">
            <img src={IconPofile} alt="" />
            <h3>Crie seu Perfil</h3>
            <p>
              Aqui é o lugar onde o seu sonho do primeiro emprego começa! Nos
              conte mais sobre você e crie um perfil único para que as empresas
              possam conhecer a sua personalidade. Com o perfil pronto é só
              partir pra busca.
            </p>
          </div>
          <div className="home-operation-steps">
            <img src={IconSearch} alt="imagem de uma lupa de pesquisa" />
            <h3>Busque</h3>
            <p>
              Procure por empresas que chamem a sua atenção e veja se são
              compatíveis com o seu perfil. Deu match? É só cair pra dentro!
              Ainda não tem as qualificações necessárias? Busque um de nossos
              cursos para complementar o seu perfil.
            </p>
          </div>
          <div className="home-operation-steps">
            <img src={IconInside} alt="icone de um boneco com o braço levantado" />
            <h3>Tá dentro!</h3>
            <p>
              Achou a vaga perfeita, você atende os requisitos, fez a entrevista
              online e a empresa está pronta pra te receber? Pronto, você tá
              dentro do seu primeiro emprego! .
            </p>
          </div>
        </div>
      </div>
      <div className="abolt-container">
        <h1 className="abolt-title">Sobre nós</h1>
        <p className="abolt-text">
          A Tô Dentro! nasceu como uma plataforma para aceleração de
          oportunidades que busca não <br />
          só aproximar candidato e vaga, mas qualificar jovens e servir de
          trampolim para sua
          <br /> evolução no mercado de trabalho.
          <br />
          Aqui você cria o seu perfil, faz suas buscas personalizadas, se
          qualifica para as empresas que
          <br /> têm interesse e tá dentro!
          <br />
          A Tô Dentro! quer trazer mais agilidade, mais transparência e desafiar
          você, jovem, a<br /> construir sua carreira e ajudar você, empresário,
          a encontrar a melhor opção de candidato.
          <br />
          <br />
          Cai pra dentro! :)
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
