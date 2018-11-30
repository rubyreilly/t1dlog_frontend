import React, { Component } from 'react';
import LogContainer from './LogContainer'
import NewEntryForm from './NewEntryForm'
import TimerContainer from './TimerContainer'
// import Header from './Header'
// import NavBar from './NavBar'

import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'




class HomeContainer extends Component{

  // componentDidMount() {
    // localStorage.getItem("token")
    //   ? this.props.fetchInsulins(this.props.user)
    //   : this.props.history.push("/signup");
  // }

  setDefaultTab=()=>{
    if (this.props.insulins.length !== 0){
      this.props.selectInsulin(this.props.insulins[0].id)
    }
  }

  render(){
    const username = this.props.user.username
    return(
      <div>
      <h3>signed in as {username}</h3>
      <TimerContainer/>
      <NewEntryForm/>
      {this.setDefaultTab()}
      <LogContainer/>
      </div>


    )
  }
}

const mapStateToProps=(state)=>{
  return{
    insulins:state.insulins,
    user: state.auth.currentUser
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    selectInsulin:(insulinId)=>dispatch(selectInsulin(insulinId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
