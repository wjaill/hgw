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
		let {text,b} = this.props
		return (
			<div className="type-header">
				<div className="type-header-left" onClick={this.goback}>
					<i className="iconfont">&#xe78d;</i>
				</div>
				<div className="type-header-center">
					<p className="p-input" onClick={this.props.search}>
						<input type="text" placeholder="请输入关键字"/>
					</p>
					{
						b?<b className="iconfont">&#xe6e4;</b>:''
					}
					
				</div>
				<div className="type-header-right">
					{
						text?<i>{text}</i>:<span className="iconfont">&#xe679;</span>	
					}
				</div>
			</div>
		)
		
	}
	
}

export default TypeHeader