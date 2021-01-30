import {I_PROJETO} from "../components/projeto/Projeto"
import {I_SKILL} from "../components/skills/SkillContainer"

declare global {
  interface Conteudo {
    nome: string,
    icon: string,
    profissao: string,
    git: string,
    linkdin: string,
    email: string,
    skils: I_SKILL[],
    projetos: I_PROJETO[]
  }
}