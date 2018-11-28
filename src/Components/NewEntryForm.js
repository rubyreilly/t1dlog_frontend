import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postEntry} from '../Redux/actions'

class NewEntryForm extends Component{

  state = {
    time:new Date(),
    insulin:"",
    note:''
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
      insulin_id : insulinObj.id,
      status: 'active',
      note: this.state.note}
    this.props.postEntry(newEntry)
  }

  generateInsulinDropDown=()=>{
    return this.props.insulins.map(insulin=><option>{insulin.insulin_name}</option>)
  }


  render(){

    return(

      <form className='ui form compact green segment' id='newform' onSubmit={(e)=>this.handleSubmit(e)}>
      <h3>new entry form</h3>
      <div className='fields'>

      <div className='field'>

      <select name='insulin' value={this.state.insulin} onChange={(e)=>this.handleChange(e)}>
      <option value="" selected disabled hidden>select insulin</option>
      {this.generateInsulinDropDown()}
      </select>

      </div>



      <div className="field">
        <label>Note</label>
        <textarea rows="2" name='note' value={this.state.note} onChange={(e)=>this.handleChange(e)}></textarea>
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
