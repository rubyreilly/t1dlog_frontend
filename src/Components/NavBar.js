import React, { Component } from 'react';

class NavBar extends Component{

  render(){
    return(

      <div className="ui compact vertical labeled menu">
      <div className="active item">
      <i className="home icon"></i>
      Home
      </div>
      <div className="item">
      <i className="cog icon"></i>
      Settings
      </div>
      <div className="item">
      <i className="sign out alternate icon"></i>
      Sign Out
      </div>



      </div>
    )
  }
}

export default NavBar
