import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {selectUser} from '../Redux/actions'

class LoginForm extends Component{
  state={
    username:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.props)
    // const userObj=this.props.users.find((user)=>{
    //   return user.username == this.state.username
    // })
    //
    // return this.props.selectUser(userObj)
  }



  render(){
    return(
      <div className="ui three column grid">
        <div className="column">
      <div className = "ui center aligned inverted segment">
      <h1>Login</h1>
      <form className="ui inverted form" onSubmit={(e)=>this.handleSubmit(e)}>
      <div className = "two fields">
      <div className= "field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>
      </div>
      <button>login</button>
      </form>
      </div>
      </div>
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
