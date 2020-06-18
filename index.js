import React, { Component } from 'react';
import { render } from 'react-dom';
import Parent from './Parent';
import ProfileInfo from './ProfileInfo';
import './style.css';
import {BrowserRouter,Route} from 'react-router-dom';

const App = ()=> {
  return(
  <div>
  <Parent/>
  </div>
  )
}

render(
  <BrowserRouter>
  <div>
  <Route component={App}/>
  <Route path='/profileInfo' component={ProfileInfo}/>
  </div>
  </BrowserRouter>, document.getElementById('root'));
