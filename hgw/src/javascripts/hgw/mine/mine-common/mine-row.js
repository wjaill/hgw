import React, { Component } from 'react';

class MineRow extends Component {
	constructor(props){
		super(props);
	}
  render() {
  	let {text,ishas} = this.props
    return (
      <div className="mine-row">
        	<div className="row-left">
        		<span className="iconfont"> {this.props.children}</span>
        		<i>{text}</i>
        	</div>
        	{
        		ishas?<div className="row-right">
        		<b>查看全部订单</b>
        		<strong className="iconfont">&#xe60f;</strong>
        	</div>:""
        	}
      </div>
    );
  }
}

export default MineRow;
