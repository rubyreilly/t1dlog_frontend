import React, { Component } from 'react';

class TimerCard extends Component{
  render(){
    return(

      <div className="ui center aligned green inverted segment">

      <h3>{this.props.insulinObj.insulin_name} timer</h3>
      <h1> {this.props.entryObj.time_left} of {this.props.insulinObj.insulin_duration_in_minutes} remaining</h1>
      <h3>Last Administered {this.props.entryObj.entry_date_and_time}</h3>

      </div>

    )
  }
}

export default TimerCard
