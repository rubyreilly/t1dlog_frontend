import React, { Component } from 'react';
// import InsulinForm from './InsulinForm'
// import MyInsulins from './MyInsulins'

class SignUp extends Component{

  state={
    username:'',
    password:''

  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }


  handleSignUp = () => {
  fetch("http://localhost:3001/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
  })
    .then(resp => resp.json())
    .then(resp => localStorage.setItem("token", resp.token));
  // resp => localStorage.setItem("token", resp.token)
};


  handleSubmit=(e)=>{
    e.preventDefault();
     this.handleSignUp();
     this.props.history.push("/home");
  }



  render(){
    return(

        <div className="ui center aligned green  segment">
     <h1>Sign Up</h1>
      <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>

      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <div className= "inline field">
      <label>password:</label>
      <input name='password' value={this.state.password} onChange={(e)=>this.handleChange(e)}></input>
      </div>
      <button>Sign Up</button>

      </form>
      </div>

    )
  }
}


export default SignUp
