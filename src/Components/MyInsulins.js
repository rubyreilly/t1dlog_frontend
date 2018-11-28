import React, { Component } from 'react';
import InsulinCard from './InsulinCard'
import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'

class MyInsulins extends Component{
  generateInsulinCards=()=>{
    return this.props.insulins.map((insulinObj)=>{
      return <InsulinCard insulinObj={insulinObj} key={insulinObj.id}/>
    })
  }


  render(){
    return(
      <div className="ui center aligned violet compact segment">
      <h1>My Insulins</h1>
      {this.generateInsulinCards()}

      </div>
    )
  }
}

const mapStateToProps= (state)=>{
  return {
    insulins: state.insulins,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    selectInsulin:(insulin)=>dispatch(selectInsulin(insulin))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyInsulins)
