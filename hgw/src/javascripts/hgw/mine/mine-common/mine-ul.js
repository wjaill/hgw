import React, { Component } from 'react';

class MineUl extends Component {
	constructor(props){
		super(props);
	}
  render() {
  	let {ishas} = this.props
    return (
    	<div>
    	{	
	    	ishas ? <ul className="mine-ul">
	         <li>
	         	<span className="iconfont">&#xe60e;</span>
	         	<i>代付款</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe611;</span>
	         	<i>代收货</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe60c;</span>
	         	<i>代自提</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe63d;</span>
	         	<i>代评价</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe610;</span>
	         	<i>退款/退货</i>
	         </li>
	      </ul>:<ul className="mine-ul">
	         <li>
	         	<span className="iconfont">&#xe64f;</span>
	         	<i>预存款</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe62d;</span>
	         	<i>充值卡</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe627;</span>
	         	<i>代金券</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe629;</span>
	         	<i>红包</i>
	         </li>
	         <li>
	         	<span className="iconfont">&#xe61e;</span>
	         	<i>积分</i>
	         </li>
	      </ul>
      }
    	</div>
    );
  }
}

export default MineUl;
