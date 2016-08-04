import React, { Component } from 'react'
import logo from './images/logo.svg'
import docker from './images/docker.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="App-header">
          <img src={logo} class="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <button type="button" class="btn btn-default btn-lg">
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
          </button>
        </div>
        <img src={docker} alt="docker"/>
      </div>
    );
  }
}

export default App;
