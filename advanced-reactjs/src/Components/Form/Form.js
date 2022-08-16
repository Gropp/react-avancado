import React, {useContext} from "react"
import { ThemesContext } from "../Theme/Theme"

function Form () {

    //constante que recebe o contexto do thema
    //usado para controlar o acesso de somente usuarios logados
    const context = useContext(ThemesContext)

    const renderForm = (
        <form>
            <label>Nome:</label>
            <input />
            <label>E-mail:</label>
            <input />
            <label>Idade:</label>
            <input />
            <label>Telefone:</label>
            <input />
        </form>
    )

    const renderNotLogged = (
        <h2>É necessario realizar o login!</h2>
    )

    return (
        <div>
            {/* em caso de logado mostrar o formulario */}
            {console.log('valor do token', context.token)}
            {!context.token ? renderNotLogged : renderForm}
        </div>
        
    )
}

export default Form