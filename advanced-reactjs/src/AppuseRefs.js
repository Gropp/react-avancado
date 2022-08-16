import React, {useRef, useState, useEffect} from "react"

//programacao funcional
//useRef

function App () {
  //atribui a propriedade a uma constante
  const  inputRef = useRef()
  //podemos ainda atribuir um value
  const count = useRef(1)
  //criaca da constante value, com o metodo setValue iniciada com false para monitorar a mudanca de estados
  //nao é utilizado a variavel do useState, entao podemos deixar em branco
  const [, setValue] = useState(false)
  //arrow function para o evento click
  const handleClick = () => {
    //uma das propriedades do useRef é mudar o foco para o objeto referenciado
    inputRef.current.focus()
    console.log('inputRef.current: ', inputRef.current)
  }

  //o useEffect nao reinderiza a pagina, entao o novo valor de count nao é mostrado
  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui')
      count.current = 300
      //forcando a reinderizacao do componente com useState
      setValue(true)
    }, 3000)
  })


  // retorna o componente enviando os argumentos necessarios
  return (
    <>
      <h1>Valor de count: {count.current}</h1>
      foco: <input ref={inputRef} />
      <button onClick={handleClick}>Focar</button>   
    </>
  )
}


export default App