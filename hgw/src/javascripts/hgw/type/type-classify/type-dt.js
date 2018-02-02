//写入简单结构  使用时直接复制

import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router'
import TypeDd from './type-dd'
class TypeDt extends Component {
	constructor(props){
		super(props)
		this.state = {
	      typechilds:this.props.data.child
	    }
	}
  render() {
    return (
      <dl>
	      <dt onClick={this.detail.bind(null,this.props.data.cat_name)}>
	      	<i></i>
	      	{this.props.data.cat_name}
	      	<strong className="iconfont">&#xe605;</strong>
	      </dt>
	      <div className="alldd">
		      {
				this.state.typechilds.map((item,index)=>(
					<TypeDd data={item.cat_name} key={item.cat_id}/>
				))
			  }
		   </div>
      </dl>
    );
  }
  
   detail(keyword){
    	hashHistory.push({pathname:'/type/type-list',query:{  
			keyword:keyword,
		}
      })
    }
}

export default TypeDt;
