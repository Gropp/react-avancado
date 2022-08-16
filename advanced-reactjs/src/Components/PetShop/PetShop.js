import React from "react";
import PropTypes from "prop-types"

function PetShop (props) {

    const {dogs, cats, customers, customerName, onClick, status} = props

    return (
        <div>
            <h1>Dogs: {dogs}</h1>
            <h2>Cats: {cats}</h2>
            <div>
                Quantidade de clientes: {customers}
            </div>
            <div>
                Nome do cliente: {customerName} 
            </div>
            <div>
                <button onClick={onClick}>Inicar Banho</button>  
            </div>
            <div>
                Status do banho: {status}
            </div>
        </div>
    )
}

//valore default para as propriedades
PetShop.defaultProps = {
    cats: 0,
    customers: [],
    status: "Completed"
}

// define os tipos das variaveis com prototypes
PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customerName: PropTypes.string.isRequired,
    onclick: PropTypes.func,
    status: PropTypes.oneOf(["Completed", "Disabled"])
}

export default PetShop