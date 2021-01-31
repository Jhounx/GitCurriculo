import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to left, 
      ${props => props.theme.background.gradientStart}, 
      ${props => props.theme.background.gradientEnd}
    );
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .circle1 {
    bottom: 5%;
    left: 10%;
  }
  .circle2 {
    top: 5%;
    right: 15%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.webKit.track.color};
    margin: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.webKit.handle.color};
    border-radius: 8px;
    transition: .2s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.webKit.handle.hover};
  }
`;

export const Main = styled.div`
  display: flex;
  background: white;
  width: 1152px;
  height: 678px;
  border-radius: 1rem;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.main.gradientStart},
    ${props => props.theme.main.gradientEnd}
  );
  backdrop-filter: blur(0.8rem);
  z-index: 3;
  flex-direction: row;
  @media(max-width: 1180px) {
    width: 95%;
  }
  @media(max-height: 680px) {
    height: 95%;
  }
  @media(max-width: 920px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`

export const Circle = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 10rem;
  background: linear-gradient(
    to right top,
    ${props => props.theme.circle.gradientStart},
    ${props => props.theme.circle.gradientEnd}
  );
  backdrop-filter: blur(1rem);
  position: absolute;
  z-index: 0;
  @media(max-width: 920px) {
    display: none;
  }
`

export const Sidebar = styled.div`
  height: auto;
  width: 27%;
  background: linear-gradient(
    to right,
    ${props => props.theme.sidebar.gradientStart},
    ${props => props.theme.sidebar.gradientEnd}
  );
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 10px;
  @media(max-width: 920px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0px;
    padding: 10px 20px;
    height: 120px;
    overflow-y: auto;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }
  div {
    margin-top: 10px;
    text-align: center;
    .nome {
      font-size: 23px;
      color: ${props => props.theme.sidebar.menu.nome};
      font-weight: 700;
    }
    .profissao {
      font-size: 17px;
      color: ${props => props.theme.sidebar.menu.profissao};
      font-weight: 600;
    }
  }
  @media(max-width: 920px) {
    flex-direction: row;
    justify-content: space-between;
    img {
      height: 80px;
      width: 80px;
      border-radius: 40px;
    }
    div {
      text-align: end;
    }
  }
`

export const Contatos = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 10px;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 15px;
    text-decoration: none;
    svg {
      color: ${props => props.theme.sidebar.contatos.icons};
      transition: .2s ease-in-out;
    }
    div {
      flex: 1 1;
      text-align: center;
      h2 {
        font-size: 20px;
        color: ${props => props.theme.sidebar.contatos.color};
        transition: .2s ease-in-out;
      }
      @media(max-width: 920px) {
        display: none;
      }
    }
    &:hover {
      svg {
        color: ${props => props.theme.sidebar.contatos.hover}!important;
      }
      div {
        h2 {
          color: ${props => props.theme.sidebar.contatos.hover}!important;
        }
      }
    }
    @media(max-width: 920px) {
      align-items: center;
      justify-content: center;
      padding: 0px;
    }
  }
  @media(max-width: 920px) {
    flex: 1;
    width: 100%;
    padding: 40px 10px;
    display: flex;
    flex-direction: row;
  }
`

export const ChangeTheme = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 920px) {
    margin-top: 5px;
  }
`

export const MoonIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.changeTheme.icon};
`

export const Dash = styled.div`
  padding: 30px 50px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.4rem;
    color: ${props => props.theme.dash.titulo};
  }
  .divisor {
    border: 1px solid ${props => props.theme.dash.divisor};
    margin: 60px 0px;
    @media(max-width: 920px) {
      margin: 20px 0px;
    }
  }
  @media(max-width: 920px) {
    padding: 10px 20px;
  }
  @media(max-width: 520px) {
  padding: 10px 10px;
}
`

export const TitleDash = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 4rem;
  svg {
    color: ${props => props.theme.dash.titulo}
  }
  h1 {
    margin-left: 30px;
  }
`