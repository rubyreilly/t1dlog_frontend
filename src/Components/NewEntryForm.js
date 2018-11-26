import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postEntry} from '../Redux/actions'

class NewEntryForm extends Component{

  state = {
    time:new Date(),
    insulin:""
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const insulinObj=this.props.insulins.find((insulin)=>{
      return insulin.insulin_name == this.state.insulin
    })

    const newEntry = {
      user_id: this.props.user,
      entry_date_and_time: this.state.time.toISOString(),
      insulin_id : insulinObj.id}
    this.props.postEntry(newEntry)
  }

  generateInsulinDropDown=()=>{
    return this.props.insulins.map(insulin=><option>{insulin.insulin_name}</option>)
  }

  // currentTime = ()=>{
  //   return new Date()
  // }

  render(){

    return(
      <form className='ui form' id='newform' onSubmit={(e)=>this.handleSubmit(e)}>
      <div className='fields'>

      <div className='field'>

      <select name='insulin' value={this.state.insulin} onChange={(e)=>this.handleChange(e)}>
      <option value="" selected disabled hidden>select insulin</option>
      {this.generateInsulinDropDown()}
      </select>
      
      </div>

      </div>
      <button>add to log</button>

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

const mapDispatchToProps=(dispatch)=>{
  return{
    postEntry:(newEntry)=>dispatch(postEntry(newEntry)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewEntryForm)