import React, { Component } from 'react';
import './App.css';
import Router from './router/router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
