import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import SignUp from './Components/SignUp'

import AccountForm from './Components/AccountForm'
import { BrowserRouter, Route, Switch} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';

import {connect} from 'react-redux'
import {fetchCurrentUser} from './Redux/actions'



import './App.css';

class App extends Component {
  state = {
    // auth: { currentUser: {} },
    newUser: {
      username: "",
      password: ""
    }
  };



  componentDidMount=()=>{
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token)
      // this.props.fetchCurrentUser(token)
    }
    else{
      console.log("no token")
    }
  }

  handleLogout = () => {
  //   localStorage.removeItem("token");
  //   this.setState({ auth: { currentUser: {} } });
  //   this.props.history.push("/signup");
  }
  //
  handleSignUp = user_info => {
  //   fetch("http://localhost:3001/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: user_info.username,
  //         password: user_info.password
  //       }
  //     })
  //   })
  //     .then(resp => resp.json())
  //     .then(resp => localStorage.setItem("token", resp.token));
  };


  handleLogin = () => {
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
  .then(resp => localStorage.setItem("token", resp.token))
  // resp => localStorage.setItem("token", resp.token)
  };







  render() {
    return (
      <BrowserRouter>

      <div>

        <div className="ui three column grid">
          <div className="column">
            <NavBar handleLogout={this.handleLogout} />
          </div>
        <div className="column">
          <Header/>
        </div>
      </div>


      <Switch>
      <Route
          path="/signup"
          render={props => <SignUp handleSignUp={this.handleSignUp} />}
        />
        <Route
          path="/login"
            render={props => <LoginForm handleLogin={this.handleLogin} />}
          />

            <Route path="/account" component={AccountForm} />
            <Route path="/" component={HomeContainer} />
          </Switch>

      </div>
      </BrowserRouter>

    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchCurrentUser:(token)=>dispatch(fetchCurrentUser(token))
  }
}




export default connect(null, mapDispatchToProps)(App)
