import React, { Component } from 'react'
import {Link} from "react-router"

class DetailsBot extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="detailsbot">
        <ul>
            <li><i className="iconfont">&#xe61b;</i><span>客服</span></li>
            <li><i className="iconfont">&#xe602;</i><span>购物车</span></li>
            <li><span>立即购买</span></li>
            <li><span>加入购物车</span></li>            
        </ul>
      </div>
    );
  }
}

export default DetailsBot;
