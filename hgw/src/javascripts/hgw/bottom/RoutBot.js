import React, { Component } from 'react';
import {Link} from "react-router"

class HomeBot extends Component {
  constructor(props){
    super(props)
    this.state={
      navs:[
        {id:1,text:"客户端",icon:"\ue65c"},
        {id:2,text:"触屏版",icon:"\ue633"},
        {id:3,text:"电脑版",icon:"\ue693"}        
      ],
      height:'',
      gotop:'',
      type:''
    }
    this.totop=this.totop.bind(this)
  }
  componentWillReceiveProps(props){
    this.setState({type:props.type})
  }
  totop(){
    switch(this.state.type){
      case 1 : document.getElementById("home").scrollTop = 0 + "px"; break
      case 2 : document.getElementsByClassName("findcontent")[0].scrollTop = 0 + "px"; break
      default : break
    }
  }
  componentWillMount(){
    console.log(this.props.type)
  }
  render() {
    let {navs} = this.state 
    return (
      <div className="homebot">
        	<div className="bot-nav">
            <Link to="login">登陆</Link>
            <a>注销</a>
            <Link to="feedcall">反馈</Link>                
            <a onClick={this.totop}>返回顶部</a>
          </div>
          <ul>
            {
              navs.map(item=>(
                <li key={item.id}>
                  <i className="iconfont">{item.icon}</i>
                  <span>{item.text}</span>
                </li>
              ))
            }
          </ul>
          <p className="dada">Copyright © 2014-2016 汉购网hangowa.com版权所有</p>
          <div id="gotop" onClick={this.totop}><i className="iconfont">&#xe62c;</i></div>
      </div>
    );
  }
}

export default HomeBot;
