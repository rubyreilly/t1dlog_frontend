import React, { Component } from 'react';
import LogEntry from './LogEntry'
import {connect} from 'react-redux'
// import {reducer} from '../Redux/reducer'


class InsulinLog extends Component{


  generateLogEntries=()=>{

    // return entries.map(entryObj=><LogEntry entryObj={entryObj} key={entryObj.id}/>)
  }




  render(){
    console.log(this.props)
    return(
      <div className="ui bottom attached active tab segment">

      <table className="ui celled table">

      <thead>
          <tr>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Insulin Name</th>
          <th>Insulin Duration</th>
          <th>Time Left</th>
          <th>Status</th>
          </tr>
        </thead>

      <tbody>


      </tbody>

      </table>
    </div>

    )
  }
}

const mapStateToProps= (state)=>{
  return {selectedInsulin: state.selectedInsulin}
}


export default connect(mapStateToProps)(InsulinLog)
