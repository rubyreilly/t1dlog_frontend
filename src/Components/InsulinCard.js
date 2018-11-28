import React, { Component } from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'


class InsulinCard extends Component{
  render(){
    const formattedDuration= moment.duration(this.props.insulinObj.insulin_duration_in_minutes, "minutes").format("h")
    return(
      <div className="ui center aligned blue segment">
      <p>{this.props.insulinObj.insulin_name}</p>
      <p>{formattedDuration} hours</p>
      </div>
    )
  }
}

export default InsulinCard
