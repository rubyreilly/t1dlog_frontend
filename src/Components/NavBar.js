import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import LoginForm from './LoginForm'

class NavBar extends Component{

  render(){
    return(

      <div className="ui compact vertical labeled menu">

      <Link to="/home">
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


      <Link to="/">
      <div className="item">
      <i className="sign out alternate icon"></i>
      Log out
      </div>
      </Link>

      </div>
    )
  }
}

export default NavBar
