import React, { Component } from 'react';


class HomeCon extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  render() {
    let data = this.props.data.length?this.props.data.splice(1,3):[]
    console.log(data)
    return (
      <div className="homecon">
      {
        
        data[0]?data.map((item,i)=>(
          <div key={i}>
          <div className="conhead" >
            <p>{item.goods.title}</p>
            <p>小编向您推荐以下商品</p>
          </div> 
          <div>
              {
                item.goods.item.map((items,j)=>(
                <div className="good" key={j}>
                  <img src={items.goods_image}/>
                  <div>
                      <p>{items.goods_name}</p>
                      <p><span>￥<b>{items.goods_promotion_price}</b></span></p>
                  </div>
                </div>
                ))
              }
          </div>
          </div> 
        )):"" 
      }
      </div>
    )
  }
}

export default HomeCon;
