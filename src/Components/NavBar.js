import React, { Component } from 'react';

class NavBar extends Component{

  render(){
    return(
      <div className="ui compact vertical labeled menu">
      <a className="active item">
      Home
      </a>
      <a className="item">
      Settings
      </a>
      <a className="item">
      Sign Out
      </a>

      </div>
    )
  }
}

export default NavBar
