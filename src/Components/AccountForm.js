import React, { Component } from 'react';
import InsulinForm from './InsulinForm'
import MyInsulins from './MyInsulins'
// import {connect} from 'react-redux'



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
      <div id='home'>
      <div>


        <div className="ui center aligned segment" id='user-edit-form'>
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
      <button>update</button>
      </form>
      </div>
      </div>

<div className="ui center aligned segment" id='ins-form'>
      <InsulinForm/></div>
<div className="ui center aligned segment" id='my-ins'>
      <MyInsulins/></div>
      </div>


    )
  }
}

// const mapStateToProps=(state)=>{
//   return{
//     user:state.auth.currentUser.user_id}
// }



export default AccountForm
