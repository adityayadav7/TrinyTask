
import React, { Component } from 'react'

import './App.css';

import Dashboard from "./component/Dashboard";
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intent:[]
    }
  }
  

  render() {
    return (
      <div className="App">
        <Dashboard/>
      
    </div>
    )
  }
}

export default App