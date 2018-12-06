import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postEntry} from '../Redux/actions'
import moment from 'moment'

class NewEntryForm extends Component{

  state = {
    dayArray:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    monthArray: ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"],
    // time:new Date(),
    time: moment().format('LT'),
    // month:moment().month(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    year: new Date().getFullYear() ,
    // time: new Date().getTime(),


    insulin: this.props.insulins[0].insulin_name,
    note:'',
    bloodSugar:'',
    numUnits:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  formatDateTime=()=>{
    console.log("TIME",this.state.time)
    console.log("MONTH",this.state.month)
    console.log("DAY",this.state.day)

    let month_to_str = this.state.month
    if (typeof this.state.month==="number"){
      month_to_str = this.state.monthArray[this.state.month]
    }

    const datetime_combined = new Date(`${month_to_str} ${this.state.day} ${this.state.year} ${this.state.time}`)

    return datetime_combined.toISOString()

  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const insulinObj=this.props.insulins.find((insulin)=>{
      return insulin.insulin_name == this.state.insulin
    })

    const newEntry = {
      user_id: this.props.user.id,
      entry_date_and_time: this.formatDateTime(),
      insulin_id : insulinObj.id,
      status: 'active',
      note: this.state.note,
      current_blood_sugar: this.state.bloodSugar,
      num_units_insulin: this.state.numUnits}
    this.props.postEntry(newEntry)
    this.setState({
      insulin: '',
      note:'',
      bloodSugar:'',
      numUnits:''
    })
  }

  generateInsulinDropDown=()=>{
    return this.props.insulins.map(insulin=><option>{insulin.insulin_name}</option>)
  }

  generateMonthDropDown=()=>{
    return this.state.monthArray.map(month=>{
      return <option>{month}</option>
    })
  }

  generateDayDropDown=()=>{
    return this.state.dayArray.map(day=>{
      return <option>{day}</option>
    })
  }


  render(){
    const monthArray= ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"]

    return(
      <form className='ui form segment' id='newform' onSubmit={(e)=>this.handleSubmit(e)}>

      <div className='fields'>


      <div className='field'>

      <select name='insulin' value={this.state.insulin} onChange={(e)=>this.handleChange(e)}>
      {this.generateInsulinDropDown()}
      </select>

      </div>



      <div className="two wide field">
        <input name='time' value={this.state.time} onChange={(e)=>this.handleChange(e)}></input>
        </div>


        <div className="field">
        <select name='month' value={this.state.monthArray[this.state.month]} onChange={(e)=>this.handleChange(e)}>
        {this.generateMonthDropDown()}
        </select>
        </div>


        <div className="field">
        <select name='day' value={this.state.day} onChange={(e)=>this.handleChange(e)}>
        {this.generateDayDropDown()}
        </select>
        </div>



      <div className="two wide field">
        <label>Blood Sugar</label>
        <input name='bloodSugar' value={this.state.bloodSugar} placeholder='#' onChange={(e)=>this.handleChange(e)}></input>
        </div>


      <div className="two wide field">
        <label>Units</label>
        <input name='numUnits' value={this.state.numUnits} placeholder='#' onChange={(e)=>this.handleChange(e)}></input>
        </div>


      <div className="field">
        <textarea rows="1" name='note' value={this.state.note} placeholder='note...' onChange={(e)=>this.handleChange(e)}></textarea>
        </div>

        <div className="field">
        <button id='add-new-entry-btn'>add to log</button>
        </div>
      </div>

      </form>

    )
  }
}



const mapStateToProps=(state)=>{
  return{
    insulins: state.insulins,
    user:state.auth.currentUser
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    postEntry:(newEntry)=>dispatch(postEntry(newEntry)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewEntryForm)
