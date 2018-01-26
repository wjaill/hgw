import React, { Component } from 'react';
import {Link} from "react-router"

class Good extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  componentWillMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="good">

        <img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05544059544104485_240.jpg"/>
        <div>
            <p>这是一个很流弊很流弊的商品 veryvery流弊</p>
            <p><span>￥<b>20.90</b></span></p>
        </div>
      </div>
    )
  }
}

export default Good;
