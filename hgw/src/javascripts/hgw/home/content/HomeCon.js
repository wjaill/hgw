import React, { Component } from 'react';
import {Link} from "react-router"
import Good from "./Good.js"
import RoutBot from "../../bottom/RoutBot.js"

class HomeCon extends Component {
  constructor(context,props){
    super(context,props)
    this.state={
      data:[]
    }
  }
  shouldComponentUpdate(props){
      if(props.data.length===this.props.data.length){
          return false           
      }else{
          return true
      }
  }

  render() {
    let data = this.props.data.length?this.props.data.splice(1,3):[]
    console.log(data)
    return (
      <div className="homecon">
      {
        
        data[0]?data.map((item,i)=>(
          <div className="bigcon" key={i}>
          <div className="conhead" >
            <p>{item.goods.title}</p>
            <p>小编向您推荐以下商品</p>
          </div> 
          <div>
              {
                item.goods.item.map((items,j)=>(
                  
                  <Link key={j}  to={'/details/'+'goods_id='+items.goods_id}>
                    <Good data={items}/>
                  </Link>
                ))
              }
          </div>
          </div> 
        )):"" 
      }
      
      <RoutBot type={1}/>
      </div>
    )
  }
}

export default HomeCon;
