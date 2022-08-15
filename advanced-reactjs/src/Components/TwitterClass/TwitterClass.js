import React, { Component } from 'react';

//criado como class
class Twitter extends Component {

  // ciclos de vida


  state = {
    tweet: 'title'
  }

  // depreciado na versao 17 do react
  // substituir pelo DidMount - verificar se o componente 
  UNSAFE_componentWillMount(){
      console.log('componentWillMount - depreciado')
  }

  componentDidMount(){
    // ao montar o componente ele recebe os valores da lista
      const {posts, loading } = this.props
      console.log('componentDidMount', posts)
      console.log('componentDidMount', loading)
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
        console.log('componentDidUpdate:loading ', loading)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmont: fui removido')
  }

  //como esse componente é criado como classe se usa o THIS
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet
  }

  tweet = () => {
    this.setState({
        tweet: true
    })
  }

  render() {
    const { posts } = this.props
    console.log('render', posts)
    return (
      <div>
        <h1>TESTE</h1>
        <button onClick={this.tweet}>Re-render</button>
      </div>
    )
  }
}

export default Twitter