import React, { Component } from 'react';


class LogEntry extends Component{

  render(){
     console.log(this.props)
    return(

      <tr>
      <td data-label="date">{this.props.entryObj.entry_date}</td>
      <td data-label="time-administered">{this.props.entryObj.entry_starting_time}</td>
      <td data-label="time-remaining">tktktk</td>
      <td data-label="status">tktktk</td>
      </tr>

    )
  }
}

export default LogEntry
