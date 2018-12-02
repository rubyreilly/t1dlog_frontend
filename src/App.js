import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import SignUp from './Components/SignUp'

import AccountForm from './Components/AccountForm'
import { BrowserRouter, Route, Switch} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';




import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>

      <div>

        <div className="ui three column grid">
          <div className="column">
            <NavBar/>
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


            <Route path="/account" component={AccountForm} />
            <Route path="/home" component={HomeContainer} />



            <Route
              path="/"
                render={props => <LoginForm handleLogin={this.handleLogin} />}
              />
          </Switch>

      </div>
      </BrowserRouter>

    );
  }
}

export default App
