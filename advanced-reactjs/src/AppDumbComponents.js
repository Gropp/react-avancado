import React, {useState, memo} from "react"
import Button from "./Components/Button"
import Calc from "./Components/Calc"

//programacao funcional
//Dumb Component

function App () {

  const [value, setValue] = useState(0)
  const [str, setStr] = useState('')
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleClick = () => {
    console.log('adicionar ao carrinho')
    setMin(10)
  }
  
  const handleCalc = ({target}) => {
    const string = target.value
    console.log('calcula')
    setValue(min+max)
    setStr(string)
  }

  // chama no botao a funcao handleClick ao evento onClick
  return (
    <>
      <div>
        <Button
        onClick={handleClick}
      >
        Adicionar no carrinho
      </Button>
      </div>
      <div>
        <Calc
          min={min}
          max={max}
          onChange={handleCalc}
        />
      </div>
      <div>
        <p>
          Valor Calculado: {value}
        </p>
        <p>
          String digitada: {str}
        </p>
      </div>
    </>
  )
}

export default memo(App)