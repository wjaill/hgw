import React, { Component } from 'react';
import axios from "axios"
import TypeHeader from '../type-common/type-header'
import TypeCircle from './type-circle'
import TypeSquare from './type-square'

class TypeSearch extends Component {
	constructor(props){
		super(props)
        this.state = {
            list:[],
            his_list:[],
        }
	}
	componentWillMount(){
		let that = this
		 axios.get("/hgw/mo_bile/index.php?act=index&op=search_key_list").then(({data})=>{
		      that.setState({list:data.datas.list})
		      that.setState({his_list:data.datas.his_list})
		      //console.log(that.state.list)
		    })
	}
  render() {
    return (
      <div className="type-search">
      		<TypeHeader text={"搜索"}/>
      		<h2>热门搜索</h2>
      		<ul className="type-circle">
	      		{
	            this.state.list.map((item,i)=>(
	        		<TypeCircle data={item} key={i}/>
	            ))
	           }
      		</ul>
      		<h2>历史记录</h2>
      		<ul className="type-square">
	      		{
	            this.state.his_list.map((item,i)=>(
	        	<TypeSquare data={item} key={i}/>
	            ))
	           }
      		</ul>
      		<button>清空历史</button>
      </div>
    );
  }
}

export default TypeSearch;