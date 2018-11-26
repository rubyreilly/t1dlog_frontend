import React, { Component } from 'react';


class LogEntry extends Component{

  render(){
    const {entryObj}=this.props
    return(
      <tr className={entryObj.status === "active" ? "ui inverted green table segment" : null}>
      <td data-label="date">{entryObj.entry_date_and_time}</td>
      <td data-label="start-time">{entryObj.entry_date_and_time}</td>
      <td data-label="end_time">{entryObj.end_time}</td>
      <td data-label="time_left">{entryObj.time_left}</td>
      <td data-label="status">{entryObj.status}</td>
      </tr>
    )
  }
}

export default LogEntry
