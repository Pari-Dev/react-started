import React, { Component } from 'react';
import Hello from './Hello';
import './style.css';

export default class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div style={{textAlign : 'center'}}>
       <h2>The Github Cards App</h2>
      </div>
    );
  }
}
