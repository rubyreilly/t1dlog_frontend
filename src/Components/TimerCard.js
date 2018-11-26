import React, { Component } from 'react';

class TimerCard extends Component{
  render(){
    console.log(this.props)
    return(

      <div className="ui center aligned green inverted segment">

      <h3>{this.props.insulinObj.insulin_name}</h3>
      <h1> {this.props.entryObj.time_left} of {this.props.insulinObj.formatted_duration} remaining</h1>
      <h3>Last Administered {this.props.entryObj.formatted_date} {this.props.entryObj.formatted_start_time}</h3>

      </div>

    )
  }
}

export default TimerCard
