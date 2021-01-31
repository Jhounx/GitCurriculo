import React, {memo} from "react"
import {v4 as uuidv4} from "uuid"
import {Container, ContainerTexto, ContainerFooter} from "./styles"

export type I_PROJETO = {
  nome: string,
  oferecimento?: string,
  participantes?: Participante[],
  tecnologias: string[],
  certificado?: string,
  linkGit: string,
  texto: string
}

export type Participante = {
  nome: string,
  git: string,
}

const Projeto: React.FC<I_PROJETO> = (props) => {
  return (
    <Container>
      <div className="nome">{props.nome}</div>
      {props.oferecimento !== undefined &&
        <div className="linha">
          <div className="leftText">Oferecimento:</div>
          <div className="rightText">{props.oferecimento}</div>
        </div>
      }
      {props.participantes !== undefined &&
        <div className="linha">
          <div className="leftText">Participantes:</div>
          <div className="rightText">
            {props.participantes?.map((participante, index) => {
              const ultimo = props.participantes?.length === (index + 1)
              return (
                <div key={uuidv4()} className="participantes">
                  <a className="linkParticipante"
                    href={participante.git}>{participante.nome}</a>
                  {!ultimo &&
                    <div className="divisorProjeto">|</div>
                  }
                </div>
              );
            })}
          </div>
        </div>
      }
      <div className="linha">
        <div className="leftText">Tecnologias:</div>
        <div className="rightText">
          {props.tecnologias?.map((tecnologia, index) => {
            const ultimo = props.tecnologias?.length === (index + 1)
            return (
              <div key={uuidv4()} className="tecnologia">
                <div className="linkTecnologia">{tecnologia}</div>
                {!ultimo &&
                  <div className="divisorProjeto">|</div>
                }
              </div>
            );
          })}
        </div>
      </div>
      <ContainerTexto>
        {props.texto}
      </ContainerTexto>
      <ContainerFooter>
        {props.certificado !== undefined &&
          <a href={props.certificado} >Certificado de conclusão</a>
        }
        {props.certificado !== undefined && !props.linkGit !== undefined &&
          <div className="divisorProjeto">|</div>
        }
        {props.linkGit !== undefined &&
          <a href={props.linkGit} >Link do repositório</a>
        }
      </ContainerFooter>
    </Container>
  )
}

export default memo(Projeto)