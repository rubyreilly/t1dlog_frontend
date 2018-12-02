import React, { Component } from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'
import Countdown from 'react-countdown-now';

class TimerCard extends Component{

  calculateTimeLeft=()=>{
    const start = this.props.entryObj.entry_date_and_time

    const duration_min = this.props.insulinObj.insulin_duration_in_minutes
    const duration_sec = duration_min * 60
    const duration = duration_sec * 1000

    return(<Countdown date={new Date(start).getTime() + duration} />)
  }


  render(){


    const entryObj = this.props.entryObj
    const insulinObj = this.props.insulinObj

    const formattedDate = moment(entryObj.entry_date_and_time).format('dddd MMMM Do')
    const formattedStartTime = moment(entryObj.entry_date_and_time).format('LT')
    const formattedDuration= moment.duration(insulinObj.insulin_duration_in_minutes, "minutes").format("h")
    const timeLeft = this.calculateTimeLeft()

    return(
      <div className="column">
      <div className="ui center aligned green inverted segment">

      <h3>{insulinObj.insulin_name} timer</h3>
      <h1> {timeLeft}</h1>
      <h2>of {formattedDuration} hours remaining</h2>
      <h3>Administered: {formattedDate} at {formattedStartTime}</h3>

      </div>
      </div>

    )
  }
}

export default TimerCard
