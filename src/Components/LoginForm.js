import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {selectUser} from '../Redux/actions'

class LoginForm extends Component{
  state={
    username:'',
    password:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }




  render(){
    return(

      <div className = "ui center aligned green segment">
      <h1>Login</h1>
      <form className="ui form" onSubmit={e=>this.props.handleLogin(e, this.state)}>

      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <div className= "inline field">
      <label>password:</label>
      <input name='password' value={this.state.password} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <button>login</button>
      </form>
      </div>


    )
  }
}

// const mapStateToProps= (state)=>{
//   return {
//     users: state.users
//   }
// }
//
//
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     selectUser:(user)=>dispatch(selectUser(user)),
//   }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default LoginForm
