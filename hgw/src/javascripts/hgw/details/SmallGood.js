import React, { Component } from 'react';

class SmallGood extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let data = this.props.data
    return (
      <div className="smallgood">
        <img src={data.goods_image_url}/>
        <p>{data.goods_name}</p>
        <p><span>￥</span><b>{data.goods_price}</b></p>
      </div>
    );
  }
}

export default SmallGood;
