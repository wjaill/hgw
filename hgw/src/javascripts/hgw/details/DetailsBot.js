import React, { Component } from 'react'
import {Link} from "react-router"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CarAction from '../../../redux/action/CarAction'
import store from "../../../redux/store"

class DetailsBot extends Component {
  constructor(props){
    super(props)
    this.state={
      num:0,
    }
  }
  addCar(id,num){
    this.setState({num:++num})
    this.props.CarAction.addCar(id,num)
    localStorage[id] = JSON.stringify(this.props.Car.CarData)
  }
  componentWillMount(){
    this.props.CarAction.addCar(localStorage.Good,0)
    
  }
  render() {
    let {num} = this.state
    return (
      <div className="detailsbot">
        <ul>
            <li><i className="iconfont">&#xe61b;</i><span>客服</span></li>
            <li><Link to={'shopcar'}><i className="iconfont">&#xe602;</i><span>购物车</span></Link></li>
            <li><span>立即购买</span></li>
            <li onClick={this.addCar.bind(this,localStorage.Good,num)}><span>加入购物车</span></li>            
        </ul>
      </div>
    );
  }
}

export default connect(state=>state,dispatch=>{
  return{
    CarAction:bindActionCreators(CarAction,dispatch)   //bindActionCreators 通过dispatch将action包裹 怎讲dispacth
  }
})(DetailsBot)