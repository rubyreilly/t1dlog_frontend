import React, { Component } from 'react';

class NavBar extends Component{

  render(){
    return(

      <div className="ui compact vertical labeled menu">
      <a className="active item">
      <i className="home icon"></i>
      Home
      </a>
      <a className="item">
      <i className="cog icon"></i>
      Settings
      </a>
      <a className="item">
      <i className="sign out alternate icon"></i>
      Sign Out
      </a>



      </div>
    )
  }
}

export default NavBar
