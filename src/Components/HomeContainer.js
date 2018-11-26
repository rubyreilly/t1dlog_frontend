import React, { Component } from 'react';
import LogContainer from './LogContainer'
import NewEntryForm from './NewEntryForm'

class HomeContainer extends Component{
  render(){
    return(
      <div>
      <NewEntryForm/>
      <LogContainer/>
      </div>
    )
  }
}

export default HomeContainer
