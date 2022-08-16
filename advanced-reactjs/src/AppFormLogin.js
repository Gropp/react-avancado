import React, { useState, useEffect } from "react"
import { ThemesContext, themes} from './Components/Theme/Theme'
// importa o componente/api criado
import Card from './Components/Card/Card'


//programacao funcional
function App () {
  //criando um estado
  //toda vez que vc chama um state pelo setXYZ ele renderiza o componente
  const [token, setToken] = useState()

  //o useEffect fica monitorando o token e a cada 4 segundos passa o valor dele
  useEffect(() => {
    setTimeout(() => {
      setToken('34fsdfasd53w6fg3wfh42g42t32')
    }, 4000)
  }, [setToken])

  return (
    //os providers passam os valores para os componentes filhos
    //neste caso o tema e o toke que é usado para acesso
    // ... spread - passa todos os valores do objeto themes
    <ThemesContext.Provider value={{...themes.secondary, token}}>
      <Card />
    </ThemesContext.Provider>
  )
}

export default App