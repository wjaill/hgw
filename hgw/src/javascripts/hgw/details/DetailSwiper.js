import React, { Component } from 'react';
import {Link} from "react-router"
import Swiper from "swiper"
import DetailsHead from "./DetailsHead"

class DetailSwiper extends Component {
  constructor(context,props){
    super(context,props)
    this.state={
        navs:[
            {id:1,text:'首页',icon:'\ue61d',path:''},
            {id:2,text:'搜索',icon:'\ue60b',path:''},
            {id:3,text:'购物车',icon:'\ue602',path:'shopcar'},
            {id:4,text:'我的商城',icon:'\ue605',path:''},
            {id:5,text:'消息',icon:'\ue61b',path:''}            
        ],
        isshow:false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({isshow:!this.state.isshow});
  }
  componentDidUpdate(){
    new Swiper('.banner',{
        pagination: {
            el: '.banner-pagination',
          }
    })
 }
 retutop(){
    this.props.retutop()
 }

  render() {
    let {navs} = this.state
    let {changeto} = this.props
    
    let data = this.props.data==''?'':this.props.data.goods_image.split(",")
    return (
        <div className="detailswiper">
            <div className={changeto?'header':'header1'}>
                <div className="left"><i className="iconfont" onClick={this.retutop.bind(this)}>&#xe675;</i></div>
                <DetailsHead id={this}/>
                <div className="right" onClick={this.handleClick}><i className="iconfont">&#xe679;</i></div>
                <ul className="headnav" style={{display: this.state.isshow ? "block" : "none"}}>
                    {
                        navs.map(item=>(
                        <li key={item.id}>
                            <Link to={item.path}>
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.text}</span>
                            </Link>
                        </li>
                        ))
                    }
                </ul>
                <div className="love"><i className="iconfont">&#xe617;</i></div>
            </div>
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                    {
                       data==''?'':data.map((item,i)=>(
                        <div className="swiper-slide" key={i}>
                            <img src={item}/>                
                        {/* <Link><img src={item.image}/></Link> */}
                    </div>
                       ))
                    }
                    
                </div>
                <div className="swiper-pagination banner-pagination"></div>
            </div>
        </div>
    );
  }
}

export default DetailSwiper;
