import React, { Component } from 'react';


class LogEntry extends Component{

  calculateEndTime=(start)=>{
    const duration = this.props.insulinObj.insulin_duration_in_minutes
    console.log(duration)
  }


  render(){
    const {entryObj}=this.props
    const datetime = new Date(entryObj.entry_date_and_time)
    const formattedDate = datetime.toDateString()
    const formattedStartTime = datetime.toLocaleTimeString('en-US')
    const formattedEndTime = this.calculateEndTime(datetime)

    return(
      <tr className={entryObj.status === "active" ? "ui inverted green table segment" : null}>
      <td data-label="date">{formattedDate}</td>
      <td data-label="start-time">{formattedStartTime}</td>
      <td data-label="end_time">end_time</td>
      <td data-label="time_left">time left</td>
      <td data-label="status">status</td>
      </tr>
    )
  }
}

export default LogEntry
