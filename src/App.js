import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image logo={logo} />
          <p>
            Starting...
          </p>
        </header>
      </div>
    );
  }
}

export default App;
