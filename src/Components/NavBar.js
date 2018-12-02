import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
// import LoginForm from './LoginForm'

class NavBar extends Component{

  render(){

    return(

      <div className="ui compact vertical labeled menu">

      <NavLink to="/home">
      <div  className="item" activeClassName="active item">
      <i className="home icon"></i>
      Home
      </div>
      </NavLink>

      <NavLink to="/account">
      <div className="item" activeClassName="active item">
      <i className="cog icon"></i>
      Settings
      </div>
      </NavLink>


      <NavLink to="/">
      <div className="item" activeClassName="active item">
      <i className="sign out alternate icon"></i>
      Log out
      </div>
      </NavLink>

      </div>
    )
  }
}

export default NavBar
