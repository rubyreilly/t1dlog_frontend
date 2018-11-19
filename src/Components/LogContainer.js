import React, { Component } from 'react';

class LogContainer extends Component{
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
            <th>Time Administered</th>
            <th>Time Remaining</th>
            <th>Status</th>
            </tr>
          </thead>

        <tbody>
          <tr>
          <td data-label="date">11/18</td>
          <td data-label="time-administered">2:40 PM</td>
          <td data-label="time-remaining">1hr25</td>
          <td data-label="status">complete</td>
          </tr>
        </tbody>

        </table>
      </div>


      </div>
    )
  }
}

export default LogContainer
