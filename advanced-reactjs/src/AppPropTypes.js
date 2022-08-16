import React from "react"
import PetShop from "./Components/PetShop/PetShop"
//programacao funcional
//typechecking com PropTypes

function App () {
  
  const handleClick = () => {
    console.log('Iniciando banho...')
  }

  // retorna o componente enviando os argumentos necessarios
  return (
    <PetShop
      dogs={2}
      customerName='Fernando Gropp'
      onClick={handleClick}
      status="Done"
    />
  )
}


export default App