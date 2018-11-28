import React, { Component } from 'react';
import LogContainer from './LogContainer'
import NewEntryForm from './NewEntryForm'
import TimerContainer from './TimerContainer'
// import Header from './Header'
// import NavBar from './NavBar'

// import {connect} from 'react-redux'
// import {fetchInsulins} from '../Redux/actions'




class HomeContainer extends Component{

  componentDidMount() {
    // localStorage.getItem("token")
    //   ? this.props.fetchInsulins(this.props.user)
    //   : this.props.history.push("/signup");
    // console.log("THIS IS USER:", this.props.user)
    // this.props.fetchInsulins(this.props.user)
  }

  render(){
    return(
      <div>
      <TimerContainer/>
      <NewEntryForm/>
      <LogContainer/>
      </div>


    )
  }
}

// const mapStateToProps=(state)=>{
//   return{user:state.auth.currentUser.user_id}
// }
//
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     fetchInsulins:(user)=>dispatch(fetchInsulins(user))
//   }
// }


export default HomeContainer
