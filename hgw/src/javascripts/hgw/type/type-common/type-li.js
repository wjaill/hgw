import React, { Component } from 'react';

class TypeLi extends Component {
	constructor(props){
		super(props)
	}
  render() {
  	let {data} = this.props
    return (
      <li className="type-li">
		<div className="typebox-left">
			<img src={data.goods_image_url}/>
		</div>
		<div className="typebox-right">
			<h2>{data.goods_name}</h2>
			<h3>{data.goods_jingle}</h3>
			<h4>{data.goods_price}</h4>
			<h5><i>销量:{data.goods_salenum}</i><b>{data.store_name}</b></h5>
		</div>
      </li>	
    );
  }
}

export default TypeLi;
