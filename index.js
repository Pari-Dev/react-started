import React, { Component } from 'react';
import { render } from 'react-dom';
import Parent from './Parent';
import './style.css';

const App = ()=> {
  return(
  <div>
  <Parent/>
  </div>
  )
}

render(<App />, document.getElementById('root'));
