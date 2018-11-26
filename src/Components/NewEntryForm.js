import React, { Component } from 'react';
import {connect} from 'react-redux'

class NewEntryForm extends Component{

  state = {
    time:'',
    insulin:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const newObj = {
      user_id: this.props.user,
      entry_date_and_time: this.state.time,
      insulin_id : this.state.insulin}
    const options = {
      method: "POST",
      body: JSON.stringify(newObj),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    return fetch(`http://localhost:3001/api/v1/users/${this.props.user}/entries`, options)
    .then(res=>res.json())
    .then(console.log())
  }

  generateInsulinDropDown=()=>{
    return this.props.insulins.map(insulin=><option>{insulin.id}</option>)
  }

  render(){
    console.log(this.props)
    return(
      <form className='ui form' id='newform' onSubmit={(e)=>this.handleSubmit(e)}>
      <div className='fields'>

      <div className='field'>
      <label>
      Insulin
      <select name='insulin' value={this.state.insulin} onChange={(e)=>this.handleChange(e)}>
      {this.generateInsulinDropDown()}
      </select>
      </label>
      </div>

      <div className='field'>
      <label>
      Time
      <input type="text" name='time' placeholder="time"
      value={this.state.time} onChange={(e)=>this.handleChange(e)}/>
      </label>
      </div>

      </div>
      <button>submit</button>

      </form>
    )
  }
}

const mapStateToProps= (state)=>{
  return {
    insulins: state.insulins,
    user: state.user
  }
}

export default connect(mapStateToProps)(NewEntryForm)
