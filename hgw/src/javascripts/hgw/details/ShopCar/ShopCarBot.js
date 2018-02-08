import React, { Component } from 'react';

class ShopCarBot extends Component {
  constructor(props){
    super(props)
    this.state={
      price:0
    }
  }
  componentDidMount(){
    let prices = 0
    this.props.data.forEach(item => {
       prices+=item.price*1*item.num
    });
    this.setState({price:prices.toFixed(2)})
    
  }
  componentWillReceiveProps(nextProp){
    let prices = 0
    nextProp.data.forEach(item => {
       prices+=item.price*1*item.num
    });
    this.setState({price:prices.toFixed(2)})
    return true
  }

  render() {
    let {price} = this.state
    return (
      <div className="shopcarbot">
        <div><input type="checkbox"/></div>
        <p><span>合计总金额:</span><span><b>￥</b>{price}</span></p>
        <button>提交订单</button>
      </div>
    )
  }
}

export default ShopCarBot;
