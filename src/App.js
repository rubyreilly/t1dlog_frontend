import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import TimerContainer from './Components/TimerContainer'
import 'semantic-ui-css/semantic.min.css';



import './App.css';

class App extends Component {
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


export default App;
