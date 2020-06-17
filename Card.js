import React, { Component } from 'react';
import Parent from './Parent';
import './style.css';

const Card = ()=> {
  return(
   <div style={{display:'flex'}}>
  <div>
   <img src = "./Assets/download.png"/>
  </div>
  <div>
  <h4>Name here</h4>
  <h4>Company here</h4>
  </div>
  </div>
  )
}
export default Card;
