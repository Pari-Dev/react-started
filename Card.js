import React, { Component } from 'react';
import Parent from './Parent';
import routes from ' ./Router'
import profileInfo from './ProfileInfo';
import './style.css';
import {Link} from 'react-router-dom';


const Card = ({users})=> {
  return(
 users.map((user,id)=>{
   return(
  <div style={{display:'flex'}}>
  <div>
   <img style={{width:'80px',height:'100px',margin:'10px'}}src = "https://www.callsprout.com/wp-content/uploads/2016/05/portrait-placeholder-510x315.jpg"/>
  </div>
  <div>
  < Link to= '/ProfileInfo'><h4>{user.name}</h4></Link>
  <h4 style={{marginLeft:'20px'}}>{user.website}</h4>
  </div>

  </div>)
 })
  )
}
export default Card;
