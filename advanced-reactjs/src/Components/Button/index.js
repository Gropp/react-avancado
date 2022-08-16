import React from "react";
import PropTypes from "prop-types"
//dumb componente
//nao manipula dados e nao faz nada
//recebe valores via props / children


function Button(props) {
    const {children, onClick} = props
    return (
        <button
            onClick={onClick}
        >
            {children}
        </button>
    )
}

// seta que a propriedade do botao é uma funcao e que ela é obrigatoria
Button.propType = {
onClick: PropTypes.func.isRequired
}


export default Button