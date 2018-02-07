import React, { Component } from 'react';

class Personal extends Component {
	constructor(props){
		super(props);
		this.a = ""
		this.color = ['#FA765E','#FFC760','#65A7EC','#54D2B5','#68A2ED','#D293D6']
		
	}
  render() {
    return (
      <div className="personal">
        	<div className="personal-head">
        		 <div className="head-top">
        		 		<span className="iconfont">&#xe668;</span>
        		 		<span className="iconfont">&#xe679;</span>
        		 </div>
        		 <div className="head-center">
        		 	<img src="http://www.hangowa.com/data/upload/shop/common/default_user_portrait.gif"/>
        		 	<span>15653506992</span>
        		 </div>
        		 <ul className="head-bottom">
        		 	<li>
        		 		<span>0</span>
        		 		<i>商品收藏</i>
        		 	</li>
        		 	<li>
        		 		<span>0</span>
        		 		<i>店铺收藏</i>
        		 	</li>
        		 	<li>
        		 		<span className="iconfont">&#xe635;</span>
        		 		<i>我的足迹</i>
        		 	</li>
        		 </ul>
        	</div>
      </div>
    );
  }
  	componentDidMount() {
		let that = this;
		let i = 0;
		that.head = document.getElementsByClassName("personal-head")[0]
		that.a = setInterval(function(){
			that.head.style.backgroundColor=that.color[i++%6]
	    },2000)
	}
   componentWillUnmount() {
		clearInterval(this.a);//清除定时器
	}
}

export default Personal;
