import styled from "styled-components"

export const Container = styled.div`
  padding: 20px 40px;
  border-radius: 5px;
  background: linear-gradient(
    to right top,
    ${props => props.theme.dash.projeto.container.gradientStart},
    ${props => props.theme.dash.projeto.container.gradientEnd}
  );
  width: 60%;
  min-width: 40vw;
  border-radius: 5px;
  margin-top: 2rem;
  .linha {
    display: flex;
    font-size: 18px;
    @media(max-width: 920px) {
      display: block;
    }
  }
  .leftText {
    color: ${props => props.theme.dash.projeto.left};
    font-weight: 500;
  }
  .rightText {
    display: flex;
    color: ${props => props.theme.dash.projeto.right.color};
    font-weight: 500;
    margin-left: 5px;
    .participantes {
      display: flex;
      .linkParticipante {

        color: ${props => props.theme.dash.projeto.right.color};
        &:hover {
          color: ${props => props.theme.dash.projeto.right.hover}
        }
      }
    }
    .divisorProjeto {
      margin-left: 5px;
      margin-right: 5px;
    }
    .tecnologia {
      display: flex;
    }
  }
  .nome {
    font-size: 20px;
    color: ${props => props.theme.dash.projeto.titulo};
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media(max-width: 920px) {
    width: 100%;
    padding: 20px 20px;
    margin-top: 1rem;
  }
`

export const ContainerTexto = styled.div`
  overflow-y: scroll;
  max-height: 220px;
  margin-top: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  color: ${props => props.theme.dash.projeto.texto};
  &::-webkit-scrollbar { 
    display: none;
  }
  @media(max-width: 920px) {
    font-size: 1rem;
  }
`

export const ContainerFooter = styled.div`
  display: flex;
  margin-top: 15px;
  .divisorProjeto {
    color: ${props => props.theme.dash.projeto.link.separador};
    margin-left: 5px;
    margin-right: 5px;
    @media(max-width: 920px) {
      display: none;
    }
  }
  a {
    font-weight: 500;
    color: ${props => props.theme.dash.projeto.link.color};
    &:hover {
      color: ${props => props.theme.dash.projeto.link.hover};
    }
  }
`