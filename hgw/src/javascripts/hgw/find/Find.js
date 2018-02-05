import React, { Component } from 'react';
import FindHead from "./findhead/FindHead"
import FindContent from "./content/FindContent"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindAction from '../../../redux/action/FindAction'
import Footer from '../footer/Footer'


class Find extends Component {
  constructor(context,props){
    super(context,props)
    this.state={
      
    }
  }
  componentWillMount(){
    this.props.FindAction.getData()
    console.log(this)
  }
  render() {
    return (
      <div className="find">
          <FindHead/>
          <FindContent/>
          <Footer />
      </div>
    )
  }
}

export default connect(state=>state,dispatch=>{
  return{
    FindAction:bindActionCreators(FindAction,dispatch)
  }
})(Find)