/* @flow */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

type ITest = {
  test: boolean,
  bla: string | null
}

class App extends Component<*, ITest, *> {
  state: ITest
  constructor(props) {
    super(props)
    this.state = {
      test: false,
      bla: null
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
