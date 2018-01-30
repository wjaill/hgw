import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router'
class TypeCircle extends Component {
	constructor(props){
		super(props)
	}
    render() {
      return (
        <li className="type-circleItem" onClick={this.detail.bind(null,this.props.data)}>
      		{this.props.data}
        </li>
      );
    }
    
    detail(keyword){
    	hashHistory.push({pathname:'/type/type-list',query:{  
			keyword:keyword,
		}
      })
    }
}

export default TypeCircle;