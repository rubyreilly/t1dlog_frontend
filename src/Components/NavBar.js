import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
// import LoginForm from './LoginForm'

class NavBar extends Component{

  render(){

    return(

      <ul id='nav-bar'>

      <Link to="/home">
      <li className='nav-item'>
      Home
      </li>
      </Link>

      <Link to="/account">
      <li className='nav-item'>
      Settings
      </li>
      </Link>


      <Link to="/">
<li className='nav-item'>
      Log out
</li>
      </Link>

      </ul>
    )
  }
}

export default NavBar
