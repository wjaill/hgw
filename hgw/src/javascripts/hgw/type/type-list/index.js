import React, { Component } from 'react';
import axios from "axios"
import TypeHeader from '../type-common/type-header'
class TypeList extends Component {
	constructor(props){
		super(props)
        this.state = {
            list:[]
        }
	}
	componentWillMount(){
		let that = this
		 axios.get("/hgw/mo_bile/index.php",{params:{
		 	act:'goods',
		 	op:'goods_list',
		 	keyword:that.props.location.query.keyword,
		 	page:10,
		 	curpage:1
		 }}).then(({data})=>{
		      that.setState({list:data.datas.goods_list})
		      console.log(that.state.list)
		  })
	}
  render() {
    return (
      <div className="type-list">
      	<TypeHeader search={this.search} b={true} d={true}/>
      </div>
    );
  }
}

export default TypeList;