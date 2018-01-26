import React, { Component } from 'react';
import {Link} from "react-router"
import Swiper from "swiper"


class Homehead extends Component {
  constructor(props){
      super(props)
      this.state={
           navs:[
             {id:1,text:'分类',img:'http://www.hangowa.com/wap/images/browse_list_w.png',color:'#FB6E52'},
             {id:2,text:'购物车',img:'http://www.hangowa.com/wap/images/cart_w.png',color:'#48CFAE'},
             {id:3,text:'我的商城',img:'http://www.hangowa.com/wap/images/member_w.png',color:'#4FC0E8'},
             {id:4,text:'每日签到',img:'http://www.hangowa.com/wap/images/mcc_04_w.png',color:'#AC92ED'}            
           ]
      }
  }

  componentDidUpdate(){
    new Swiper('.banner',{
        pagination: {
            el: '.banner-pagination',
          }
    })
}
  render() {
   
    let data = this.props.data.length?this.props.data:[]
    let {navs} = this.state
    return (
      <div className="homehead">
        	<div className="swiper-container banner">
            <div className="swiper-wrapper">
             {
              data[0]?<img src={data[0].adv_list.item[0].image} />:''
             }
            </div>
            <div className="swiper-pagination banner-pagination"></div>
          </div>
          <ul>
            {
              navs.map(item=>(
                  <li key={item.id}><Link  style={{background:`${item.color}`}}><i style={{backgroundImage:`url(${item.img})`}}></i></Link><span>{item.text}</span></li>
              ))
            }
             
          </ul>
      </div>

    )
  }
}

export default Homehead;
