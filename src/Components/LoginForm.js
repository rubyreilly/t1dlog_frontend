import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchUser} from '../Redux/actions'
import { withRouter, Link } from "react-router-dom";



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
    // console.log(this.props.users)
    // const user = this.props.users.find((user)=>user.username === this.state.username)
    this.props.fetchUser(this.state.username)
    // console.log("U ID", user.id)
    // this.props.fetchInsulins(user.id)

    this.props.history.push("/home")  }

  render(){
    return(
      <div>
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

      <Link to="/signup">
      <div className="ui center aligned red compact segment">
      New to DiaBase? Sign up!
      </div>
      </Link>

      </div>


    )
  }
}

// const mapStateToProps= (state)=>{
//   return {
//     users: state.users
//   }
// }


const mapDispatchToProps=(dispatch)=>{
  return{
    // setUser:(user)=>dispatch(setUser(user)),
    fetchUser:(username)=>dispatch(fetchUser(username))

  }
}


export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
// export default LoginForm
