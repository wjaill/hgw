import React,{Component} from 'react';
import axios from 'axios';
import {Link } from 'react-router';
import Dotime from '../common/Dotime'
import '../../stylesheets/home/goods.scss';
import Title from './Title';
class Goods extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data1:[],
			data2:[],
			ishas:false
		}
		this.isShowLoadIng = true
		this.ishas1 = true
		this.ishas2 = false
		this.page = 1
		this.size = 5
	}
getData1(pIndex,sIndex) {
	let that = this;
		axios.post("/baby/json/reply/QueryHotProductSpecialPageListTrans",{
			ApplyPlace:9,
			PageIndex:pIndex,
			PageSize:sIndex,
			DisplayLabel:["8"],
			SourceTypeSysNo:2,
			ExtensionSysNo:[0]
		}).then((res) => {
				that.setState({
				data1:this.state.data1.concat(res.data.QueryHotProductSpecialListDtos)
				})
				if(this.state.data1.length === res.data.Total){
					that.ishas1 = false
					that.ishas2 = true
					that.page = 1
				}
		}).catch((err) => {
			console.log(err)
		})
	}
getData2(pIndex) {
	let that = this;
		axios.post("/baby/json/reply/QueryHotProductPageList",{
			PageIndex:pIndex,
			PageSize:5,
			SourceTypeSysNo:2,
			ApplyPlace:9
		}).then((res) => {
				that.setState({
				data2:this.state.data2.concat(res.data.QueryHotProductListDtos)
				})
				if(this.state.data2.length === res.data.Total){
					console.log(this.state.data2.length)
					that.ishas2 = false
					that.setState({
						ishas:true
				})
				}
		}).catch((err) => {
			console.log(err)
		})
	}
	componentWillMount() {
		this.getData1(1,5);
	}
	render() {
		this.isShowLoadIng = true
		return (
			<div className = "goods">
				<div className = "good-today" >
					<Title title = {"今日专场"}/>
					{
						this.state.data1.map((item) => {
							return (
								<Link to = 'mine' className = "today-box" key = {item.Id}>
									<div className = "top">
										<img src = {item.PictureUrl} alt = {item.SubjectName}/>
										<Dotime time = {item.EndTime}/>
									</div>
									<div className = "footer">
										<span>{item.SubjectName}</span>
										<span>{item.OriDiscount}</span>
									</div>
								</Link>
							)
						})
					}
				</div>
				<div className = "good-today" style = {{display:this.ishas2 ? "block":"none"}}>
					<Title title = {"精选爆款"}/>
					{
						this.state.data2.map((item) => {
							return (
								<Link to = 'mine' className = "today-box" key = {item.ProductId}>
									<div className = "top">
										<img src = {item.PictureUrl} alt = {item.HotDescription}/>
										<Dotime time = {item.EndTime}/>
									</div>
									<div className = "footer">
										<span>{item.HotDescription}</span>
										<span>¥{item.OriginalPrice}起</span>
									</div>
								</Link>
							)
						})
					}
				</div>
				<div className = "loading" style = {{display : this.state.ishas ? "none" : "block"}}>
					Loading...
				</div>
				<div className = "loading" style = {{display : this.state.ishas ? "block" : "none"}}>
					没有更多了!
				</div>
			</div>
		)
	}
	
	componentDidMount() {
		let that = this;
		
		window.onscroll = function(){
			if(that.state.ishas) {
				return ;
			}
			//窗口的内容高度
			var sh = document.documentElement.scrollHeight;
			//窗口的可视高度
			var ch = document.documentElement.clientHeight
			//滚动条的滚动高度
			var st  = document.documentElement.scrollTop
			if(ch + st >= sh - 30&&that.isShowLoadIng){
				if(that.ishas1) {
					that.page ++
					that.getData1(that.page,that.size)
					that.isShowLoadIng = false
				}else if(that.ishas2) {
					that.getData2(that.page)
					that.page ++
					that.isShowLoadIng = false
				}else {
					return;
			}
		}
	}
}
}
export default Goods;