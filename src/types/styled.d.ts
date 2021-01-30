import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      gradientStart: string,
      gradientEnd: string
    },
    circle: {
      gradientStart: string,
      gradientEnd: string
    },
    main: {
      gradientStart: string,
      gradientEnd: string
    },
    sidebar: {
      gradientStart: string,
      gradientEnd: string,
      menu: {
        nome: string,
        profissao: string
      },
      contatos: {
        icons: string,
        color: string,
        hover: string
      }
    },
    skill: {
      container: {
        gradientStart: string,
        gradientEnd: string,
        color: string
      },
      barra: string
      text: string,
    },
    dash: {
      titulo: string,
      divisor: string,
      projeto: {
        container: {
          gradientStart: string,
          gradientEnd: string,
        },
        titulo: string,
        left: string,
        right: {
          color: string,
          hover: string
        },
        texto: string,
        link: {
          color: string,
          hover: string,
          separador: string,
        }
      }
    },
    changeTheme: {
      track: string
      seletor: string,
      icon: string
    },
    webKit: {
      track: {
        color: string
      },
      handle: {
        color: string,
        hover: string
      }
    }
  }
}

