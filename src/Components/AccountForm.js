import React, { Component } from 'react';
import InsulinForm from './InsulinForm'
import MyInsulins from './MyInsulins'

class AccountForm extends Component{

  state={
    username:'',
    password:''

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
      <div className="ui two column grid">
        <div className="column">

        <div className="ui center aligned green  segment">
     <h1>Edit Account Info</h1>
      <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>

      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <div className= "inline field">
      <label>password:</label>
      <input name='password' value={this.state.password} onChange={(e)=>this.handleChange(e)}></input>
      </div>


      </form>
      </div>





      </div>

      <div className="column">

      <InsulinForm/>
      <MyInsulins/>
      </div>


      </div>
    )
  }
}


export default AccountForm
