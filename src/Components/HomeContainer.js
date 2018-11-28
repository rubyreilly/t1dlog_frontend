import React, { Component } from 'react';
import LogContainer from './LogContainer'
import NewEntryForm from './NewEntryForm'
import TimerContainer from './TimerContainer'
// import Header from './Header'
// import NavBar from './NavBar'


class HomeContainer extends Component{
  render(){
    return(
      <div>

    

      <TimerContainer/>
      <NewEntryForm/>
      <LogContainer/>
      </div>


    )
  }
}

export default HomeContainer
