import styled from "styled-components"

export const Container = styled.div`
  padding: 10px;
  background: linear-gradient(
    to right top,
    ${props => props.theme.skill.container.gradientStart},
    ${props => props.theme.skill.container.gradientEnd}
  );
  width: 60%;
  min-width: 30vw;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  svg {
    color: ${props => props.theme.skill.container.color}
  }
  @media(max-width: 920px) {
    width: 100%;
  }
`

export const StatusBar = styled.div`
  width: 90%;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  #progressBar {
    width: 100%;
    height: .9rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.skill.barra};
    #line {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: ${props => props.theme.skill.barra};
      transition: 3s ease-in;
    }
  }
`

export const StatusBarTitle = styled.div`
  margin-top: -18px;
  font-size: 15px;
  position: static;
  font-weight: 700;
  color: ${props => props.theme.skill.text};
  div {
    width: 100%;
    height: .9rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.skill.text};;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: ${props => props.theme.skill};
      transition: 3s ease-in;
    }
  }
`

export const Text = styled.div`
  font-size: 18px;
  color: ${props => props.theme.skill.text};
  font-weight: 700;
  margin-left: 10px;
`