import {DefaultTheme} from "styled-components"

interface IThemes {
  light: DefaultTheme,
  // dark: DefaultTheme,
  [key: string]: any;
}

const Temas: IThemes = {
  light: {
    background: {
      gradientStart: "rgb(46, 210, 231)",
      gradientEnd: "rgb(102, 237, 255)"
    },
    circle: {
      gradientStart: "rgba(255,255,255, 0.9)",
      gradientEnd: "rgba(255,255,255, 0.5)"
    },
    main: {
      gradientStart: "rgba(255, 255, 255, 0.8)",
      gradientEnd: "rgba(255, 255, 255, 0.2)"
    },
    sidebar: {
      gradientStart: "rgb(255, 255, 255)",
      gradientEnd: "rgba(255, 255, 255, 0.2)",
      menu: {
        nome: "#7d98bb",
        profissao: "#426696"
      },
      contatos: {
        icons: "#426696",
        color: "#7598c7",
        hover: "#426696",
      },
    },
    skill: {
      container: {
        gradientStart: "rgb(255, 255, 255)",
        gradientEnd: "rgba(255, 255, 255, 0.829)",
        color: "#426696"
      },
      barra: "#426696",
      text: "#426696"
    },
    dash: {
      titulo: "#426696",
      divisor: "#99b6dd",
      projeto: {
        container: {
          gradientStart: "rgb(255,255,255)",
          gradientEnd: "rgba(255,255,255,0.829)"
        },
        titulo: "#426696",
        left: "#426696",
        right: {
          color: "#537cb3",
          hover: "#325d96"
        },
        texto: "#0f0f0fF",
        link: {
          color: "#353b53",
          hover: "#5a69a0",
          separador: "#ced4ee"
        }
      }
    },
    changeTheme: {
      track: "#888888",
      seletor: "#fffff",
      icon: "#fffff",
    },
    webKit: {
      track: {
        color: "#ffffff00"
      },
      handle: {
        color: "rgba(255, 255, 255, 0.514)",
        hover: "rgba(255, 255, 255, 0.788)"
      }
    }
  },
  dark: {
    background: {
      gradientStart: "rgb(18, 18, 19)",
      gradientEnd: "rgb(27, 30, 36)",
    },
    main: {
      gradientStart: "rgba(46, 52, 64, 0.8)",
      gradientEnd: "rgba(59, 66, 82, 0.2)"
    },
    circle: {
      gradientStart: "rgba(24, 26, 31, 0.9)",
      gradientEnd: "rgba(46, 52, 64, 0.5)"
    },
    sidebar: {
      gradientStart: "rgb(38, 40, 46)",
      gradientEnd: "rgb(38, 40, 46)",
      menu: {
        nome: "#97afcf",
        profissao: "#426696"
      },
      contatos: {
        icons: "#929ead",
        color: "#929ead",
        hover: "#426696",
      },
    },
    skill: {
      container: {
        gradientStart: "rgb(59, 66, 82)",
        gradientEnd: "rgba(59, 66, 82, 0.829)",
        color: "#d8dfe7"
      },
      barra: "#d8dfe7",
      text: "#d8dfe7"
    },
    dash: {
      titulo: "#ffffff",
      divisor: "#929ead",
      projeto: {
        container: {
          gradientStart: "rgb(59, 66, 82)",
          gradientEnd: "rgba(59, 66, 82, 0.829)"
        },
        titulo: "#dae6fc",
        left: "#dfe2e9",
        right: {
          color: "#dfe2e9",
          hover: "#88b1e7"
        },
        texto: "#f1f1f1",
        link: {
          color: "#ced4ee",
          hover: "#88b1e7",
          
        }
      }
    },
    changeTheme: {
      track: "#6e40c9",
      seletor: "#fffff",
      icon: "#3b17a0",
    },
    webKit: {
      track: {
        color: "#ffffff00"
      },
      handle: {
        color: "rgba(255, 255, 255, 0.514)",
        hover: "rgba(255, 255, 255, 0.788)"
      }
    }
  }
}

export default Temas