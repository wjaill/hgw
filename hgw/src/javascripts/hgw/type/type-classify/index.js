import React, { Component } from 'react';
import TypeHeader from '../type-common/type-header'
import {Link,hashHistory} from 'react-router'

class TypeClassify extends Component {
  constructor(props){
		super(props)
		
	}
  
	search(){	
		hashHistory.push('/type/type-search')
	}
	
  render() {
    return (
      <div className="type-classify">
      	
      	<TypeHeader search={this.search} b={true}/>
    
      </div>
    );
  }
  
}
export default TypeClassify;