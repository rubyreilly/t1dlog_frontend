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


  // {localStorage.getItem("token")
  //   ? render everything : this.props.history.push("/signup")}


  render(){
    return(
      <div>
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
      <button>update</button>
      </form>
      </div>
      </div>
      <div className="column">
      <InsulinForm/>
      <MyInsulins/>
      </div>
      </div>
      </div>
    )
  }
}

// const mapStateToProps=(state)=>{
//   return{
//     user:state.auth.currentUser.user_id}
// }
//
//


export default AccountForm
