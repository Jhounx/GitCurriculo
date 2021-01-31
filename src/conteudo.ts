import {FaJsSquare, FaPython, FaReact, FaCss3Alt, FaLinux } from "react-icons/fa"

const Conteudo: Conteudo = {
  nome: "João Costa",
  icon: "https://avatars.githubusercontent.com/u/32176772?s=460&u=7baa48690d4f8231cfa006254c23ce7a53e101f9&v=4",
  profissao: "FullStack Developer",
  git: "https://github.com/Jhounx",
  linkdin: "https://www.linkedin.com/in/joaocosta121",
  email: "mailto:joaocosta_neto@hotmail.com",
  skils: [
    {
      tecnologia: "Javascript",
      icon: FaJsSquare,
      skill: 85
    },
    {
      tecnologia: "Python",
      icon: FaPython,
      skill: 80
    },
    {
      tecnologia: "ReactJS",
      icon: FaReact,
      skill: 65,
    },
    {
      tecnologia: "CSS",
      icon: FaCss3Alt,
      skill: 70
    },
    {
      tecnologia: "Linux",
      icon: FaLinux,
      skill: 80
    }
  ],
  projetos: [
    {
      nome: "SiGAÊ - Sistema de Gerenciamento de Atendimento ao Estudante",
      participantes: [
        {
          nome: "João Costa",
          git: "https://github.com/Jhounx"
        },
        {
          nome: "Pedro Mota",
          git: "https://github.com/pedrocmota/"
        }
      ],
      oferecimento: "Intituto Federal da Bahia - IFBA",
      tecnologias: ["ReactJS", "NodeJS"],
      texto: 
      "O projeto foi baseado na construção do SiGAÊ, Sistema de Gerenciamento de Atendimento ao Estudante, cujo objetivo foi aprimorar e simplificar os agendamentos de atendimentos e monitorias acadêmicas. O sistema permitirá que os docentes e monitores possam agendar com bastante antecedência os seus horários de atendimento, determinando também a sala e a matéria/disciplina do atendimento ou monitoria. Os discentes poderão visualizar todos os atendimentos disponíveis e, caso de seu interesse, podem se inscrever em um. A lista de discentes inscritos ficará disponível para o respectivo docente ou monitor, que poderá submeter a presença ou não dos seus alunos em seu atendimento. Os alunos poderão confirmar a sua presença algumas horas antes do início do atendimento, com o objetivo de confirmar ao professor ou monitor sobre a realização do atendimento.",
      linkGit: "none",
      certificado: "https://suap.ifba.edu.br/comum/baixar_documento/5a76a2521905a4513eff1361ff332adf9bfe5807"
    },
    {
      nome: "Triangular COVID",
      tecnologias: ["React-Native", "NodeJS"],
      texto: 
      "O projeto consiste em um aplicativo que lhe permite visualizar e reportar aglomerações de pessoas na sua localidade com a finalidade de combate ao COVID-19. Ao reportar você precisa tirar uma foto da localidade que será enviada para o servidor e verificada, se a informação for veridica, o local a qual reportou irá aparecer como um ponto no mapa para todas as outras pessoas que acessarem o aplicativo.",
      linkGit: "https://github.com/Jhounx/Triangular",
    },
    {
      nome: "Jogo da Velha Online",
      tecnologias: ["NodeJS", "SocketIO", "Jquery"],
      texto: 
      "Projeto feito quando estava a aprender NodeJS sendo o meu primeiro projeto com a tecnologia e o que fez eu me encantar por ela. O codigo bem iniciante e sem o minimo de organização e design patern fazem-me ver a minha visivel evolução com a tecnologia comparado aos dias de hoje.",
      linkGit: "https://github.com/Jhounx/Node-Jogo-da-Velha",
    }
  ]
}

export default Conteudo