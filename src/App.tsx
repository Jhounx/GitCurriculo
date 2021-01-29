import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaRegEnvelope,
  FaLinkedin,
  FaJsSquare,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaCode,
  FaLinux,
  FaBars
} from "react-icons/fa";
import "./App.css";

function App() {

  return (
    <>
      <div className="circle1" />
      <div className="circle2" />
      <main>
        <div className="sideBar">
          <div className="menu">
            <img
              id="profileImage"
              src="https://avatars.githubusercontent.com/u/32176772?s=460&u=7baa48690d4f8231cfa006254c23ce7a53e101f9&v=4"
              alt="profile"
            />
            <div className="personText">
              <h1>João Costa</h1>
              <h2>FullStack Developer</h2>
            </div>
          </div>
          
          <div className="contacts">
            <a href="https://github.com/Jhounx" className="ContactButton">
              <FaGithub size={40} color="#426696" />
              <div className="contactText">
                <h2>Projects</h2>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/joaocosta121/"
              className="ContactButton"
            >
              <FaLinkedin size={40} color="#426696" />
              <div className="contactText">
                <h2>Linkedin</h2>
              </div>
            </a>
            <a
              href="mailto:joaocosta_neto@hotmail.com"
              className="ContactButton"
            >
              <FaRegEnvelope size={40} color="#426696" />
              <div className="contactText">
                <h2>Contact</h2>
              </div>
            </a>
          </div>
        </div>
        <div className="dash">
          <Title label="Skills" />
          <div className="skillContainer">
            <FaJsSquare size={50} color="#426696" />
            <Statusbar size={85} name="Javascript" />
          </div>
          <div className="skillContainer">
            <FaPython size={50} color="#426696" />
            <Statusbar size={80} name="Python" />
          </div>
          <div className="skillContainer">
            <FaReact size={50} color="#426696" />
            <Statusbar size={65} name="ReactJS" />
          </div>
          <div className="skillContainer">
            <FaCss3Alt size={50} color="#426696" />
            <Statusbar size={70} name="CSS" />
          </div>

          <div className="skillContainer">
            <FaLinux size={50} color="#426696" />
            <Statusbar size={80} name="Linux" />
          </div>

          <div style={{ border: "1px solid #99b6dd", margin: "60px 0px" }} />

          <Title label="Projects" />

          <div className="projectContainer">
            <h2>
              SiGAÊ - Sistema de Gerenciamento de Atendimento ao Estudante
            </h2>
            <h3>
              Oferecimento: <b>Intituto Federal da Bahia - IFBA</b>
            </h3>
            <h3>
              Numero de Participantes: <b>4 Pessoas</b>
            </h3>
            <h3>
              Tecnologias: <b>ReactJS + NodeJS</b>
            </h3>
            <textarea contentEditable="false" disabled>
              O projeto foi baseado na construção do SiGAÊ, Sistema de
              Gerenciamento de Atendimento ao Estudante, cujo objetivo foi
              aprimorar e simplificar os agendamentos de atendimentos e
              monitorias acadêmicas. O sistema permitirá que os docentes e
              monitores possam agendar com bastante antecedência os seus
              horários de atendimento, determinando também a sala e a
              matéria/disciplina do atendimento ou monitoria. Os discentes
              poderão visualizar todos os atendimentos disponíveis e, caso de
              seu interesse, podem se inscrever em um. A lista de discentes
              inscritos ficará disponível para o respectivo docente ou monitor,
              que poderá submeter a presença ou não dos seus alunos em seu
              atendimento. Os alunos poderão confirmar a sua presença algumas
              horas antes do início do atendimento, com o objetivo de confirmar
              ao professor ou monitor sobre a realização do atendimento.
            </textarea>
            <h5>
              <a href="https://suap.ifba.edu.br/comum/baixar_documento/5a76a2521905a4513eff1361ff332adf9bfe5807/">
                Certificado de Conclusão
              </a>
            </h5>
          </div>
          <div className="projectContainer">
            <h2>Triangular COVID</h2>
            <h3>
              Tecnologias: <b>React-Native + NodeJS</b>
            </h3>
            <textarea contentEditable="false" disabled>
              O projeto consiste em um aplicativo que lhe permite visualizar e
              reportar aglomerações de pessoas na sua localidade com a
              finalidade de combate ao COVID-19. Ao reportar você precisa tirar
              uma foto da localidade que será enviada para o servidor e
              verificada, se a informação for veridica, o local a qual reportou
              irá aparecer como um ponto no mapa para todas as outras pessoas
              que acessarem o aplicativo.
            </textarea>
            <h5>
              <a href="https://github.com/Jhounx/Triangular">
                Link GitHub
              </a>
            </h5>
          </div>
          <div className="projectContainer">
            <h2>Jogo da Velha Online</h2>
            <h3>
              Tecnologias: <b>NodeJS + SocketIO + Jquery</b>
            </h3>
            <textarea contentEditable="false" disabled>
              Projeto feito quando estava a aprender NodeJS sendo o meu primeiro
              projeto com a tecnologia e o que fez eu me encantar por ela. O
              codigo bem iniciante e sem o minimo de organização e design patern
              fazem-me ver a minha visivel evolução com a tecnologia comparado
              aos dias de hoje .
            </textarea>
            <h5>
              <a href="https://github.com/Jhounx/Node-Jogo-da-Velha">
                Link GitHub
              </a>
            </h5>
          </div>
          
        </div>
      </main>
    </>
  );
}

const Statusbar: React.FC<{ size: number; name: string }> = ({
  size,
  name,
}) => {
  const [width, setWidth] = useState("0");
  useEffect(() => {
    setWidth(String(size));
  }, []);

  return (
    <>
      <div className="statusBar">
        <p className="statusBarTitle">{name}</p>
        <div id="progressBar">
          <div id="line" style={{ width: width + "%" }} />
        </div>
      </div>
      <p id="insideText">{size}%</p>
    </>
  );
};

const Title: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="dashTitle">
      <FaCode size={50} color="#426696" />
      <h1 style={{ marginLeft: 30 }}>{label}</h1>
    </div>
  );
};

export default App;
