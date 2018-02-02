//这是分类页
import React, { Component } from 'react';
import axios from "axios"
import TypeHeader from '../type-common/type-header'
import TypeDt from './type-dt'
import {Link,hashHistory} from 'react-router'

class TypeClassify extends Component {
  constructor(props){
		super(props)
		this.state = {
      classify:[],
      active:0,
      type:[]
    }
	}
  
	search(){	
		hashHistory.push('/type/type-search')
	}
	classify(index,id){
		let that = this
		this.setState({
			active:index
		})
		axios.get("/hgw/mo_bile/index.php",{params:{
		 	act:'goods_class',
		 	op:'get_child_all',
		 	gc_id:id
		 }}).then(({data})=>{
	      that.setState({
	      	type:data.datas.class_list
	      })
	     // console.log(that.state.type)
		 })
	}
	componentWillMount(){
		let that = this
		 axios.get("/hgw/mo_bile/index.php?act=goods_class").then(({data})=>{
		      that.setState({classify:data.datas.category_list})
		      //console.log(that.state.classify)
		 })
	}
  render() {
    return (
      <div className="type-classify">
      
      	<TypeHeader search={this.search} b={true}/>
      	
      	<div className="type-classify-box">
      		<ul className="type-classify-left">
      			{
	            	this.state.classify.map((item,index)=>(
	            		
	            		<li className={`type-start ${index==this.state.active?'li-active':''}`} key={index} onClick={()=>this.classify(index,item.cat_id)}>
	     							 {
	      	 							item.cat_id == 39 ? <i className={`iconfont ${index==this.state.active?'i-active':''}`}>&#xe62e;</i>:<i className={`iconfont ${index==this.state.active?'i-active':''}`}>&#xe643;</i>
	      							}
	    							<span className={index == this.state.active ? "span-active" : ""}>{item.cat_name}</span>	
      						</li> 
	            	))
	       		}
	        </ul>
	        
	        <div className="type-classify-right">
	        	
	        	 		{
	        	 			this.state.type.map((item,index)=>(
	        	 				<TypeDt data={item} key={item.cat_id}/>
	        	 			))
	        	 		}
	        	
	        </div>
	        
      	</div>	
      </div>
    );
  }
  
}
export default TypeClassify;