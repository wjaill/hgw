//目前没用
import React, { Component } from 'react';

class TypeSort extends Component {
	constructor(props){
		super(props)
		this.shownot = this.shownot.bind(this)
		this.showli = this.showli.bind(this)
		this.state = {
	      show:false
	    }
	}
	shownot(){
		let {show} = this.state
		this.setState({
			show:!show
		})
	}
	
	showli(){
		let {show} = this.state
		this.setState({
			show:!show
		})
	}
  render() {
  	let {show} = this.state
    return (
      <div className="type-sort">
      	<div className="typesort-nav">
        	<p onClick={this.shownot}><span>综合排序</span><i className="iconfont">&#xe65d;</i></p>
					<span>销量优先</span>
					<p><span>筛选</span><i className="iconfont">&#xe65d;</i></p>
					<span className="iconfont show">&#xe60d;</span>
				</div>
				{
					show?<ul className="typesort-select">
					<li onClick={this.showli}>综合排序<i className="iconfont">&#xe605;</i></li>
					<li onClick={this.showli}>价格从高到低<i className="iconfont">&#xe605;</i></li>
					<li onClick={this.showli}>价格从低到高<i className="iconfont">&#xe605;</i></li>
					<li onClick={this.showli}>人气排序<i className="iconfont">&#xe605;</i></li>
				</ul>:""
				}
				
      </div>
    );
  }
}

export default TypeSort;