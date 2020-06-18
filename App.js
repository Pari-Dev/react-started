import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import ProfileInfo from ' ./ProfileInfo'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import routes from './Router'
import './style.css';

export default class App extends Component {
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res)=>{
        console.log(res.data,'res.data')
        this.setState({users:res.data})
      }
    )

  }
  constructor(props) {
    super(props);
    this.state = {users :[]}

  }

  render() {
    return (
      // <div style={{textAlign : 'center'}}>
      //  <h2>The Github Cards App</h2>
      //  <Card users ={this.state.users}/>
      // </div>
       <BrowserRouter>
          <div>
            <Switch>
              // <Route path='/' component={ProfileInfo}/>
              <Route path='/'  render={() => <Card users={this.state.users}/>} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}
