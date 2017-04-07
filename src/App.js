import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cart from './cart/Cart'
import Comment from './comments/Comments'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Comment />
        <Cart/>
      </div>
    );
  }
}

export default App;
