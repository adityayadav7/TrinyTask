
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
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
      {/* <header className="App-header">
       
        <p>
          <div>
            {this.state.intent.map((d,i)=>{
              return(
                <div key={i}>
                  <div>{d.info.displayName}
                     <div>
                       {d.info.messages.map((d1,j)=>{
                         return(
                         <div key={j}>
                           <div>{d1.text}</div>
                           <div>{d1.message}</div>
                         </div>
                         )
                       })}
                     </div>
                  </div>
                </div>
              )
            })}
          </div>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    )
  }
}

export default App