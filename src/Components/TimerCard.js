import React, { Component } from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'


class TimerCard extends Component{
  render(){
    const entryObj = this.props.entryObj
    const insulinObj = this.props.insulinObj

    const formattedDate = moment(entryObj.entry_date_and_time).format('dddd MMMM Do')
    const formattedStartTime = moment(entryObj.entry_date_and_time).format('LT')
    const formattedDuration= moment.duration(insulinObj.insulin_duration_in_minutes, "minutes").format("h:mm")
    return(
      <div className="column">
      <div className="ui center aligned green inverted segment">

      <h3>{insulinObj.insulin_name} timer</h3>
      <h1> {entryObj.time_left} of {formattedDuration} remaining</h1>
      <h3>Administered: {formattedDate} at {formattedStartTime}</h3>

      </div>
      </div>

    )
  }
}

export default TimerCard
