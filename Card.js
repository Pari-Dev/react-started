import React, { Component } from 'react';
import Parent from './Parent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';

const Card = ({users})=> {
  return(
 users.map((user,id)=>{
   return(
  <div style={{display:'flex'}}>
  <div>
   <img style={{width:'80px',height:'100px',margin:'10px'}}src = "https://www.callsprout.com/wp-content/uploads/2016/05/portrait-placeholder-510x315.jpg"/>
  </div>
  <Router>
  <div>
 <Link to='profileInfo'> <h4>{user.name}</h4></Link>
  <h4 style={{marginLeft:'20px'}}>{user.website}</h4>
  </div>
  </Router>
  </div>)
 })
  )
}
export default Card;
