import React, { Component } from 'react';
import {Link} from "react-router"

class Good extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render() {
    let {data} = this.props
    return (
      <div className="good" >
        <img src={data.goods_image}/>
        <div>
            <p>{data.goods_name}</p>
            <p><span>￥<b>{data.goods_promotion_price}</b></span></p>
        </div>
      </div>
    )
  }
}

export default Good;
