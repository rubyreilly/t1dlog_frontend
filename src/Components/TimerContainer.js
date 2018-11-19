import React, { Component } from 'react';

class TimerContainer extends Component{

  render(){
    return(
      <div>
      <div className="ui center aligned green inverted segment">

      <h3>Humalog Timer</h3>
      <h1> 1hr 20min of 3hr remaining</h1>
      <h3>Last Administered 11/18 2:40 PM</h3>

      </div>

      <div className="ui center aligned green inverted segment">
      <h3>Lantus Timer</h3>
      <h1> 14hr 15min of 24hr remaining</h1>
      <h3>Last Administered 11/17 10:30 PM</h3>
      </div>
      </div>
    )
  }
}

export default TimerContainer
