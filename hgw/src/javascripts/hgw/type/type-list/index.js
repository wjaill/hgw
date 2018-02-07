import React, { Component } from 'react';
import axios from "axios"
import TypeHeader from '../type-common/type-header'
//import TypeSort from './type-sort'
import TypeLi from '../type-common/type-li'
class TypeList extends Component {
	constructor(props){
		super(props)
		this.shownot = this.shownot.bind(this)
		this.getList = this.getList.bind(this)
		this.getListsale = this.getListsale.bind(this)
        this.state = {
            list:[],
            show:true,
            title:'综合排序',
            sale:false
        }
	}
	//控制点击综合排序出现下拉框
	shownot(){
		let {show} = this.state
		this.setState({
			show:!show
		})
	}
	//控制点击下拉框消失下拉框
	//获取列表页的数据
	getList(key,order,title){
	 let that = this
	 let {show} = that.state
		that.setState({
			show:!show
		})
	 switch(title){
	 	case 1 : that.setState({title:'价格从高到低'});break;
	 	case 2 : that.setState({title:'价格从低到高'});break;
	 	case 3 : that.setState({title:'人气排序'});break;
	 	default : that.setState({title:'综合排序'});break;
	 }
	 axios.get("/hgw/mo_bile/index.php",{params:{
	 	act:'goods',
	 	op:'goods_list',
	 	keyword:that.props.location.query.keyword,
	 	page:10,
	 	curpage:1,
	 	key,
		order
	 }}).then(({data})=>{
	      that.setState({list:data.datas.goods_list})
	      console.log(that.state.list)
	  })
	}
	getListsale(){
		 let that = this
		 let {sale} = that.state
			that.setState({
				sale:true
			})
		 axios.get("/hgw/mo_bile/index.php",{params:{
		 	act:'goods',
		 	op:'goods_list',
		 	keyword:that.props.location.query.keyword,
		 	page:10,
		 	curpage:1,
		 	key:1,
			order:2
		 }}).then(({data})=>{
		      that.setState({list:data.datas.goods_list})
		      console.log(that.state.list)
		  })
	}
	componentWillMount(){
		this.getList()
	}
		 //组件将被卸载  
	  componentWillUnmount(){ 
	    //重写组件的setState方法，直接返回空
	    this.setState = (state,callback)=>{
	      return;
	    };  
    }
  render() {
  	let {title,show,sale} = this.state
    return (
      <div className="type-list">
	      <div className="type-header">
	      	<TypeHeader search={this.search} b={true} d={true}/>
	      </div>
      	  <div className="type-sort">
      		<div className="typesort-nav">
	        	<p onClick={this.shownot}><span className="title">{title}</span><i className="iconfont title">&#xe65d;</i></p>
				<span className={sale?"title":""} onClick={this.getListsale}>销量优先</span>
				<p><span>筛选</span><i className="iconfont">&#xe65d;</i></p>
				<span className="iconfont show">&#xe60d;</span>
			</div>
				{
					show?<ul className="typesort-select">
					<li onClick={this.getList}>综合排序<i className="iconfont">&#xe605;</i></li>
					<li onClick={this.getList.bind(null,3,2,1)}>价格从高到低<i className="iconfont">&#xe605;</i></li>
					<li onClick={this.getList.bind(null,3,1,2)}>价格从低到高<i className="iconfont">&#xe605;</i></li>
					<li onClick={this.getList.bind(null,2,2,3)}>人气排序<i className="iconfont">&#xe605;</i></li>
				</ul>:""
				}
				
      	  </div>
      	<ul className="type-box">
      	    {
	            this.state.list.length?
	            this.state.list.map((item)=>(
	        		<TypeLi data={item} key={item.goods_id}/>
	            )):<p className="nolist">
	            <span className="iconfont nolist-icon">&#xe621;</span>
	            <span className="iconfont nolist-font">没有找到更多的数据了~</span>
	            </p>
	               
	        }
      	</ul>
      </div>
    );
  }
}

export default TypeList;