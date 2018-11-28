import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './LoginForm'

class NavBar extends Component{

  render(){
    return(
      <Router>
      <div className="ui compact vertical labeled menu">

      <Link to="/">
      <div className="active item">
      <i className="home icon"></i>
      Home
      </div>
      </Link>

      <Link to="/account">
      <div className="item">
      <i className="cog icon"></i>
      Settings
      </div>
      </Link>

      <Link to="/login">
      <div className="item">
      <i className="sign out alternate icon"></i>
      Log Out
      </div>
      </Link>

      </div>
      </Router>
    )
  }
}

export default NavBar
