import { createContext } from "react"

export const themes = {
    primary: {
        background: '#000',
        color: '#efefef'
    },
    secondary: {
        background: '#efefef',
        color: '#000'
    }
}

// criando um componente no react
// tem que ser importado no App.js que é a camada principal da aplicacao
export const ThemesContext = createContext(themes.secondary)