import React, { Component } from 'react';

class LogContainer extends Component{
  render(){
    return(
      <div id='log'>

      <div class="ui top attached tabular menu">
        <a class="active item">Humalog</a>
        <a class="item">Lantus</a>
      </div>

        <div className="ui bottom attached segment">
        <table className="ui celled table">

          <thead>
            <tr><th>Date</th>
            <th>Time Administered</th>
            <th>Time Remaining</th>
            <th>Status</th></tr>
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
