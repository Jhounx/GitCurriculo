import React from "react";
import {ThemeProvider, DefaultTheme} from "styled-components"
import {v4 as uuidv4} from "uuid"
import {FaGithub, FaRegEnvelope, FaLinkedin} from "react-icons/fa";
import {BsMoon} from "react-icons/bs"
import Switch from "react-switch"
import Temas from "./themes/temas"
import usePeristedState from "./hooks/usePeristedState"
import SkillContainer from "./components/skills/SkillContainer"
import Title from "./components/Title"
import Conteudo from "./conteudo"
import Projeto from "./components/projeto/Projeto"
import {
  GlobalStyle, Main, Circle, Sidebar, Menu, Contatos, ChangeTheme, Dash, MoonIcon
} from "./styles"

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState("theme", "light")
  const tema: DefaultTheme = Temas[theme]
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Circle className="circle1" />
      <Circle className="circle2" />
      <Main>
        <Sidebar>
          <Menu>
            <img
              src={Conteudo.icon}
              alt="profile"
            />
            <div>
              <h1 className="nome">{Conteudo.nome}</h1>
              <h2 className="profissao">{Conteudo.profissao}</h2>
            </div>
          </Menu>
          <Contatos>
            <a href={Conteudo.git}>
              <FaGithub size={40} />
              <div>
                <h2>Projetos</h2>
              </div>
            </a>
            <a href={Conteudo.linkdin}>
              <FaLinkedin size={40} />
              <div>
                <h2>Linkedin</h2>
              </div>
            </a>
            <a href={Conteudo.email}>
              <FaRegEnvelope size={40} />
              <div>
                <h2>Contato</h2>
              </div>
            </a>
          </Contatos>
          <ChangeTheme>
            <Switch
              onChange={() => {
                if (theme === "light") setTheme("dark")
                if (theme === "dark") setTheme("light")
              }}
              checked={theme === "dark"}
              className="react-switch"
              checkedHandleIcon={<MoonIcon><BsMoon/></MoonIcon>}
              onColor={tema.changeTheme.track}
              offColor={tema.changeTheme.track}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </ChangeTheme>
        </Sidebar>
        <Dash>
          <Title label="Skills" />
          {Conteudo.skils.map((tech) => (
            <SkillContainer key={uuidv4()} tecnologia={tech.tecnologia}
              icon={tech.icon} skill={tech.skill} />
          ))}
          <div className="divisor" />

          <Title label="Projetos" />

          {Conteudo.projetos.map((projeto) => (
            <Projeto
              key={uuidv4()}
              nome={projeto.nome}
              oferecimento={projeto.oferecimento}
              participantes={projeto.participantes}
              tecnologias={projeto.tecnologias}
              certificado={projeto.certificado}
              linkGit={projeto.linkGit}
              texto={projeto.texto}
            />
          ))}
        </Dash>
      </Main>
    </ThemeProvider>
  );
}

export default App;
