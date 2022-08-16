import React, { Component } from "react";
import Twitter from "./Components/Twitter/Twitter";

// programacao em classes
class  App extends Component {

  //variavel para flag
  state = {
    loading: false,
    actived: true
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render () {

    // cria uma lista posts
    const posts = [{
      title: 'xpto',
      description: 'foo'
    }, {
      title: 'xpto',
      description: 'foo'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover Component</button>
        {/* testa se o estado esta ativado */}
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default App