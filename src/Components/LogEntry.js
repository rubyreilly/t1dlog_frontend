import React, { Component } from 'react';


class LogEntry extends Component{

  render(){
     console.log(this.props)
    return(

      <tr>
      <td data-label="date">{this.props.entryObj.formatted_date}</td>
      <td data-label="start-time">{this.props.entryObj.formatted_start_time}</td>
      <td data-label="end_time">tktktk</td>
      
      <td data-label="insulin_name">tktktk</td>
      <td data-label="insulin_duration">tktktk</td>
      <td data-label="time_left">tktktk</td>

      <td data-label="status">tktktk</td>

      </tr>

    )
  }
}

export default LogEntry
