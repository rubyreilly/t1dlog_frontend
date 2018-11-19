import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
import NavBar from './Components/NavBar'
import TimerContainer from './Components/TimerContainer'
import 'semantic-ui-css/semantic.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>

      <NavBar/>

      <div className="ui center aligned huge header">T1DLog</div>

      <TimerContainer/>

      <HomeContainer/>

      </div>
    );
  }
}

export default App;
