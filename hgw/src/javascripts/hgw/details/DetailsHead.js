import React, { Component } from 'react';
import {Link} from "react-router"
class DetailsHead extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // console.log(this.props.id.props.id.props.params.id.slice(9)*1)
  }
  render() {
    return (
        <ul className="cen">
            <li><Link to={'details/goods_id='+`${localStorage.Good}`} activeClassName="asty">商品</Link></li>
            <li><Link to={'detaild/goods_id='+`${localStorage.Good}`} activeClassName="asty">详情</Link></li>
            <li><Link to={'evaluate/goods_id='+`${localStorage.Good}`} activeClassName="asty">评价</Link></li>                              
        </ul>
    );
  }
}

export default DetailsHead;
