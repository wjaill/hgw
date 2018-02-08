import React, { Component } from 'react';
import {Link} from "react-router"
class FindHead extends Component {
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
        isshow:false
    }
    this.handleClick = this.handleClick.bind(this)
    this.retutop = this.retutop.bind(this)
  }
  handleClick(){
    this.setState({isshow:!this.state.isshow});
  }
  retutop(){
    this.props.id.history.go(-1)
  }
  render() {
    let {navs} = this.state
    return (
      <div className="findhead">
        <i className="iconfont" onClick={this.retutop}>&#xe675;</i>
        <span>发现</span>
        <div>
            <i className="iconfont" onClick={this.handleClick}>&#xe679;</i>
            
        </div>
        <ul className="headnav" style={{display: this.state.isshow ? "block" : "none"}}>
          {
            navs.map(item=>(
              <li key={item.id}>
                  <Link to={'/details/'+'goods_id='+item.goods_id}>
                    <i className="iconfont">{item.icon}</i>
                    <span>{item.text}</span>
                  </Link>
              </li>
            ))
          }
            
        </ul>
      </div>
    );
  }
}

export default FindHead;
