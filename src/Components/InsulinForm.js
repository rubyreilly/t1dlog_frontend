import React, { Component } from 'react';

class InsulinForm extends Component{

  state={
    insulinName:'',
    duration:0
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
  }



  render(){
    return(


      <div className = "ui center aligned blue segment">
      <h1>New Insulin</h1>
      <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>

      <div className= "inline field">
      <label>insulin name:</label>
      <input name='insulinName' value={this.state.insulinName} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <div className= "inline field">
      <label>duration:</label>
      <input name='duration' value={this.state.duration} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <button>add insulin</button>
      </form>
      </div>

    )
  }
}


export default InsulinForm
