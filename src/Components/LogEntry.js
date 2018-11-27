import React, { Component } from 'react';
import moment from 'moment'


class LogEntry extends Component{

  calculateEndTime=(start)=>{
    const duration = this.props.insulinObj.insulin_duration_in_minutes
    return moment(start).add(duration, 'minutes').format()
  }

  // calculateTimeLeft=(end)=>{
  //   const now = moment(new Date()).format()
  //   console.log(moment(end).subtract(now).format("h[h] m[m]"))
  //
  //
  // }


  render(){
    const {entryObj}=this.props

    const formattedDate = moment(entryObj.entry_date_and_time).format('dddd ll')
    const formattedStartTime = moment(entryObj.entry_date_and_time).format('LT')
    const formattedEndTime = moment(this.calculateEndTime(entryObj.entry_date_and_time)).calendar()
    // const formattedTimeLeft = this.calculateTimeLeft(endTime)

    // const datetime = new Date(entryObj.entry_date_and_time)
    // const formattedDate = datetime.toDateString()
    // const formattedStartTime = datetime.toLocaleTimeString('en-US')

    return(
      <tr className={entryObj.status === "active" ? "ui inverted green table segment" : null}>
      <td data-label="date">{formattedDate}</td>
      <td data-label="start-time">{formattedStartTime}</td>
      <td data-label="end_time">{entryObj.status === "active" ? formattedEndTime : "-"}</td>
      <td data-label="time_left">{entryObj.time_left}</td>
      <td data-label="note">{entryObj.note === "" || entryObj.note === null ? "-":entryObj.note}</td>
      <td data-label="status">{entryObj.status}</td>
      </tr>
    )
  }
}

export default LogEntry
