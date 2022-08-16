import React, { Fragment } from "react"
//programacao funcional

const store = [{
  type: 'Roupa'
},
{
  type: 'Calçado'
}, 
{
  type: 'Camisa'
}]

function Column({type}) {
  // colocar uma div dentro de uma table nao da certo, por isso usamos a sintaxe sugar para encapsular os tds
  return (
    <tr>
      <td>{type}</td>
    </tr>
  )
}

function App() {

  const renderColumns = (element, key) => (
    <Fragment key={`colunm-${key}`}>
      <Column type={element.type}/>
    </Fragment>
  ) 

  return (
    <table>
      {store.map(renderColumns)}
    </table>
  )
}

export default App