import React, { Component } from 'react';
import {Link} from "react-router"
import SmallCar from "./SmallCar"
import ShopCarBot from "./ShopCarBot"

class ShopCar extends Component {
  constructor(props){
    super(props)
    this.state={
        navs:[
            {id:1,text:'首页',icon:'\ue61d',path:''},
            {id:2,text:'搜索',icon:'\ue60b',path:''},
            {id:3,text:'购物车',icon:'\ue602',path:''},
            {id:4,text:'我的商城',icon:'\ue605',path:''},
            {id:5,text:'消息',icon:'\ue61b',path:''}            
        ],
        isshow:false,
        CarList:[],
        price:0
    }
    this.handleClick = this.handleClick.bind(this)
    this.retutop = this.retutop.bind(this)
    this.clic = this.clic.bind(this)
  }
  handleClick(){
    this.setState({isshow:!this.state.isshow});
  }
  componentDidMount(){
    let reg = /[0-9]/
    let arr = []
    for(let variable  in localStorage){   //variable  为 index
       if(variable.match(reg)){
         arr.push(JSON.parse(localStorage[variable]))
         this.setState({CarList:arr})
       }
    }
  }
  clic(){
    let reg = /[0-9]/
    let arr = []
    for(let variable  in localStorage){  
       if(variable.match(reg)){
         arr.push(JSON.parse(localStorage[variable]))
         this.setState({CarList:arr})
       }
       if(this.state.CarList.length==1){
        this.setState({CarList:[]})
       }
    }
  }
  retutop(){
    this.props.history.go(-1)
  }
  render() {
      let {navs} = this.state
      let CarList = this.state.CarList==[]?[]:this.state.CarList
    return (
      <div className="shopcar">
        {
            CarList.length==0?<div className="shopcar0"><div className="header">
            <div className="left"><i className="iconfont" onClick={this.retutop}>&#xe675;</i></div>
            <div>购物车</div>
            <div className="right" onClick={this.handleClick}><i className="iconfont">&#xe679;</i></div>
            <ul className="headnav" style={{display: this.state.isshow ? "block" : "none"}}>
                {
                    navs.map(item=>(
                    <li key={item.id}>
                        <Link>
                            <i className="iconfont">{item.icon}</i>
                            <span>{item.text}</span>
                        </Link>
                    </li>
                    ))
                }
            </ul>
        </div><p>购物车空空如也</p></div>:<div  className="shopcar1"><div className="header">
            <div className="left"><i className="iconfont" onClick={this.retutop}>&#xe675;</i></div>
            <div>购物车</div>
            <div className="right" onClick={this.handleClick}><i className="iconfont">&#xe679;</i></div>
            <ul className="headnav" style={{display: this.state.isshow ? "block" : "none"}}>
                {
                    navs.map(item=>(
                    <li key={item.id}>
                        <Link>
                            <i className="iconfont">{item.icon}</i>
                            <span>{item.text}</span>
                        </Link>
                    </li>
                    ))
                }
            </ul>
        </div>
        <div className="small">
             {
                CarList==[]?'':CarList.map((item,i)=>(
                    <SmallCar key={i} data={item} clic={this.clic}/>
                ))
            } 
            
        </div>
            {
                CarList.length!==CarList.length?<ShopCarBot data={CarList}/>:<ShopCarBot data={CarList}/>
            }
        </div>
        }
        
      </div>
    );
  }
}

export default ShopCar;
