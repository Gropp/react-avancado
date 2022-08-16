import React from "react";
import PropType from "prop-types"

// DUMB COMPONENT 
// retorna o componente enviando os argumentos necessarios
// passa os valores do botao por props
// recebe um callback onChange
// manda pro conteiner que recebe e processa os valores - a regra esta no container
// desacoplado - componente burro - quem chama é o inteligente 
function Calc(props) {

    const {min, max, onChange} = props

    return (
        <div>
            <p>Valor minimo: {min}</p>
            <p>Valor maximo: {max}</p>
            <input type="text" onChange={onChange}/>
        </div>
    )
}

Calc.propType = {
    min: PropType.number.isRequired,
    max: PropType.number.isRequired,
    onChange: PropType.func.isRequired,
}

export default Calc