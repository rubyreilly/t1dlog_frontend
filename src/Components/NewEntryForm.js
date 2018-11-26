import React, { Component } from 'react';

class NewEntryForm extends Component{

  state = {
    time:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  render(){
    return(
      <form className='ui form' id='newform'>
      <div className='fields'>
      <div className='field'>
      <label>
      Time
      <input type="text" name='time' placeholder="time"
      value={this.state.time} onChange={(e)=>this.handleChange(e)}/>
      </label>
      </div>

      <div className='field'>
      <label>
      # of units
      <input type="text" name='num_units' placeholder="# of units"
      value={this.state.num_units} onChange={(e)=>this.handleChange(e)}/>
      </label>
      </div>
      </div>
      <button>submit</button>

      </form>
    )
  }
}

export default NewEntryForm
