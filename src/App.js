import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
// import NavBar from './Components/NavBar'
// import Header from './Components/Header'
// import TimerContainer from './Components/TimerContainer'
import LoginForm from './Components/LoginForm'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';

import {connect} from 'react-redux'
import {fetchInsulins} from './Redux/actions'



import './App.css';

class App extends Component {

  componentDidMount=()=>{
    this.props.fetchInsulins(this.props.user)
    // this.props.fetchUsers()
  }

  render() {
    return (
      <Router>

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={HomeContainer} />
        </Switch>


      </Router>
    );
  }
}

const mapStateToProps=(state)=>{
  return{user:state.user}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchInsulins:(user)=>dispatch(fetchInsulins(user))
    // fetchUsers:()=>dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
