import React, { Component } from 'react';

import {connect} from 'react-redux'
import {fetchEntries} from '../Redux/actions'
import LogEntry from './LogEntry'

class LogContainer extends Component{

  componentDidMount(){
    this.props.fetchEntries()
  }

  generateLogEntries=(entries)=>{

    return entries.map(entryObj=><LogEntry entryObj={entryObj} key={entryObj.id}/>)
  }

  render(){

    return(
      <div id='log'>

      <div className="ui top attached tabular menu">
        <div className="active item">Humalog</div>
        <div className="item">Lantus</div>

      </div>

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
          {this.generateLogEntries(this.props.entries)}
        </tbody>

        </table>
      </div>


      </div>
    )
  }
}

const mapStateToProps= (state)=>{
  return {entries: state.entries}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchEntries:()=>dispatch(fetchEntries())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LogContainer)
