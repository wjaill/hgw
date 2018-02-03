import React,{Component} from 'react'
import {Link,hashHistory} from 'react-router'
import { createHistory } from 'history'
const history = createHistory()
class TypeHeader extends Component {
	constructor(props){
		super(props);
		this.goback = this.goback.bind(this)
		
	}
	goback(){
		history.goBack()
	}
	render(){
		let {text,b,d} = this.props
		return (
			<div className="type-header">
				<div className="type-header-left" onClick={this.goback}>
					<i className="iconfont">&#xe78d;</i>
				</div>
				<div className="type-header-center">
					<p className="p-input" onClick={this.search}>
						<input id="getkey" type="text" placeholder="请输入关键字"/>
					</p>
					{
						b?<b className="iconfont">&#xe6e4;</b>:''
					}
					
				</div>
				<div className="type-header-right">
					{
						d ? <span onClick={this.classify} className="iconfont">&#xe640;</span>:""
					}
					{
						text?<i onClick={this.detail}>{text}</i>:<span className="iconfont">&#xe679;</span>
					}
				</div>
			</div>
		)
		
	}
	detail(keyword){
    	hashHistory.push({pathname:'/type/type-list',query:{  
			keyword:document.getElementById("getkey").value,
		}
      })
	}
	search(){
		hashHistory.push('/type/type-search')
	}
	classify(){
		hashHistory.push('/type/type-classify')
	}
	
}

export default TypeHeader