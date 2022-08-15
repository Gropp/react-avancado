import React, { useEffect, useState, memo } from 'react';
// memo - usado para criar componetes puros e aceita argumentos - evita re-render

// é o inverso ao shouldUpdate - PERGUNTA SE PODE OU NAO ATUALIZAR
// aqui verifica se é igual para NAO ATUALIZAR

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

//criado como funcao - programacao funcional com hooks
function Twitter (props) {

  // ciclos de vida

  const {loading} = props
  
  const [tweet, setTweet] = useState('title')

  // inicializado no  useState
  // state = {
  //   tweet: 'title'
  // }

  // depreciado na versao 17 do react
  // substituir pelo DidMount - verificar se o componente 
  // UNSAFE_componentWillMount = () => {
  //     console.log('componentWillMount - depreciado')
  // }

  // componentDidMount = () => {
  //   // ao montar o componente ele recebe os valores da lista
  //     const {posts, loading } = props
  //     console.log('componentDidMount', posts)
  //     console.log('componentDidMount', loading)
  // }

  // o use effect é equivalente ao componentDidMount (executa uma vez ao ser montado o componente)
  useEffect(() => {
      const {posts, loading } = props
      console.log('useEffects:DidMount', posts)
      console.log('useEffects:loading', loading)
  }, [])

  // componentDidUpdate = (prevProps) => {
  //   const { loading } = props
  //   if (props.loading !== prevProps.loading) {
  //       console.log('componentDidUpdate:loading', loading)
  //   }
  // }

  // useEffect equivalente ao DidUpdate
  useEffect(() => {
      console.log('useEffects:DidUpdate', loading)
  }, [loading])


  // componentWillUnmount = () => {
  //   console.log('componentWillUnmont: fui removido')
  // }

  // componente Will Unmount
  // ele sempre tem uma funcao return - finalizando o ciclo de vida do componente
  useEffect(() => {
    return () => {
      console.log('useEffect:WillUnmount: fui removido :(')
    }
  })

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return state.tweet !== nextState.tweet
  // }

  const handleTweet = () => {
    setTweet('Tweet atualizado')
    console.log(tweet)
  }

  const { posts } = props
  console.log('render', posts)
  return (
    <div>
      <h1>TESTE</h1>
      <button onClick={handleTweet}>Re-render</button>
    </div>
  )
}

// memo exporta como se fosse um pure-component
export default memo(Twitter, areEqual)