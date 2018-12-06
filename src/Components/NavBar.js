import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
// import LoginForm from './LoginForm'
import {connect} from 'react-redux'


class NavBar extends Component{

  render(){
    const username = this.props.user.username

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
<li className='nav-item'>{ username===''? 'Login' : `Log out ${username}` }

</li>
      </Link>

      </ul>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
