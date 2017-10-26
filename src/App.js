/* @flow */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

type ITest = {
  test: boolean,
  bla: string | null
}

class App extends Component<*, ITest, *> {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      posts: null
    }
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/portoflios/', { mode: 'no-cors' })
      const posts = await response.json()
      this.setState({ loading: false, posts })
    } catch (e) {
      this.setState({ loading: false, error: true })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.test}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
