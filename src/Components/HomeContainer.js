import React, { Component } from 'react';
import LogContainer from './LogContainer'
import NewEntryForm from './NewEntryForm'
import TimerContainer from './TimerContainer'
// import Header from './Header'
// import NavBar from './NavBar'

import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'




class HomeContainer extends Component{

  componentDidMount() {
    // localStorage.getItem("token")
    //   ? this.props.fetchInsulins(this.props.user)
    //   : this.props.history.push("/signup");
    // console.log("THIS IS USER:", this.props.user)
    // console.log("INS",this.props.insulins)
    // if (this.props.insulins.length !== 0){
    //   this.props.selectInsulin(this.props.insulins[0].id)
    // }
  }

  setDefaultTab=()=>{
    if (this.props.insulins.length !== 0){
      this.props.selectInsulin(this.props.insulins[0].id)
    }
  }

  render(){
    return(
      <div>
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
    insulins:state.insulins
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    selectInsulin:(insulinId)=>dispatch(selectInsulin(insulinId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
