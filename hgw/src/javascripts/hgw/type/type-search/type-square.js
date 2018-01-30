import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router'
class TypeSquare extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <li className="type-squareItem" onClick={this.detail}>
      	{this.props.data}
      </li>
    );
  }
   detail(){
    	hashHistory.push('/type/type-list')
    }
}

export default TypeSquare;