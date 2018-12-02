import React, { Component } from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'
// import Countdown from 'react-countdown-now';
import Timer from './Timer'

class TimerCard extends Component{

  // calculateTimeLeft=()=>{
  //   const start = this.props.entryObj.entry_date_and_time
  //
  //   const duration_min = this.props.insulinObj.insulin_duration_in_minutes
  //   const duration_sec = duration_min * 60
  //   const duration = duration_sec * 1000
  //
  //   return(<div id='clock' className='timer'><Countdown date={new Date(start).getTime() + duration} /></div>)
  // }


  render(){


    const entryObj = this.props.entryObj
    const insulinObj = this.props.insulinObj

    const formattedDate = moment(entryObj.entry_date_and_time).format('dddd MMMM Do')
    const formattedStartTime = moment(entryObj.entry_date_and_time).format('LT')
    const formattedDuration= moment.duration(insulinObj.insulin_duration_in_minutes, "minutes").format("h")

    return(
      <div className="column">
      <div className="ui center aligned green segment">

      <h3>{insulinObj.insulin_name} timer</h3>
      <Timer entryObj={entryObj} insulinObj={insulinObj}/>
      <h2>of {formattedDuration} hours remaining</h2>
      <h3>Administered: {formattedDate} at {formattedStartTime}</h3>

      </div>
      </div>

    )
  }
}

export default TimerCard
