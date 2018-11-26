import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import TimerContainer from './Components/TimerContainer'
import 'semantic-ui-css/semantic.min.css';

import {connect} from 'react-redux'
import {fetchInsulins} from './Redux/actions'



import './App.css';

class App extends Component {

  componentDidMount=()=>{
    this.props.fetchInsulins()
  }

  render() {
    return (
      <div>
      <div className="ui three column grid">
        <div className="column">
      <NavBar/></div>
      <div className="column">
      <Header/></div></div>
      <TimerContainer/>
      <HomeContainer/>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchInsulins:()=>dispatch(fetchInsulins()),
  }
}


export default connect(null,mapDispatchToProps)(App);
