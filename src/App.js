import React, { Component } from 'react'
import logo from './images/logo.svg'
import docker from './images/docker.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
          </button>
        </div>
        <img src={docker} alt="docker"/>
      </div>
    );
  }
}

export default App;
