//这是类目页的左侧分类，五角星。
import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router'
class TypeDd extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <dd onClick={this.detail.bind(null,this.props.data)}>
	     {this.props.data}
      </dd> 
    );
  }
  
  detail(keyword){
    	hashHistory.push({pathname:'/type/type-list',query:{  
			keyword:keyword,
		}
      })
    }


}
export default TypeDd;
