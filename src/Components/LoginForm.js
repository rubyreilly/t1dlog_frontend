import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUser, fetchInsulins} from '../Redux/actions'
import { withRouter } from "react-router-dom";



class LoginForm extends Component{
  state={
    username:''
    // password:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleLogin=(e)=>{
    e.preventDefault()
    console.log(this.props.users)
    const user = this.props.users.find((user)=>user.username === this.state.username)
    this.props.setUser(user)
    console.log("U ID", user.id)
    this.props.fetchInsulins(user.id)

    this.props.history.push("/home")  }

  render(){
    return(

      <div className = "ui center aligned green segment">
      <h1>Login</h1>
      <form className="ui form" onSubmit={e=>this.handleLogin(e)}>

      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>



      <button>login</button>
      </form>
      </div>


    )
  }
}

const mapStateToProps= (state)=>{
  return {
    users: state.users
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
    setUser:(user)=>dispatch(setUser(user)),
    fetchInsulins:(user)=>dispatch(fetchInsulins(user))

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
// export default LoginForm
