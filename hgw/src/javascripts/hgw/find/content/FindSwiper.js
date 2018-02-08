import React, { Component } from 'react';
import Swiper from "swiper"
import {Link} from "react-router"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindAction from '../../../../redux/action/FindAction'

class FindSwiper extends Component {
  constructor(props){
    super(props)
    this.state={
      
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
    let Find = this.props.Find.FindData.length?this.props.Find.FindData[0].adv_list.item:''
    console.log(Find) 
    return (
      <div className="findswiper">
        <div className="swiper-container banner">
            <div className="swiper-wrapper">
                {
                  Find?Find.map((item,i)=>(
                    <div className="swiper-slide" key={i}>
                      <Link  to={'/details/'+'goods_id='+item.datas}><img src={item.image}/></Link>
                    </div>
                  )):''
                }
            </div>
            <div className="swiper-pagination banner-pagination"></div>
        </div>
      </div>
    );
  }
}

export default connect(state=>state,dispatch=>{
    return{
      FindAction:bindActionCreators(FindAction,dispatch)
    }
  })(FindSwiper)