import React, { Component } from 'react';


class LogEntry extends Component{

  render(){
    const {entryObj}=this.props
     console.log(entryObj)
    return(

      <tr>
      <td data-label="date">{entryObj.formatted_date}</td>
      <td data-label="start-time">{entryObj.formatted_start_time}</td>
      <td data-label="end_time">{entryObj.formatted_end_time}</td>
      <td data-label="time_left">{entryObj.time_left}</td>
      <td data-label="status">{entryObj.status}</td>

      </tr>

    )
  }
}

export default LogEntry
