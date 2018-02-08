import React, { Component } from 'react'
import {Link} from "react-router"
import axios from "axios"
import SmallEval from "./SmallEval"
import DetailsHead from "./DetailsHead"

class Evaluate extends Component {
  constructor(props){
    super(props)
    this.state = {
        buttons:[
            {id:1,text:"全部评价",type:''},
            {id:2,text:"好评",type:1},
            {id:3,text:"中评",type:2},
            {id:4,text:"差评",type:3},
            {id:5,text:"订单晒图",type:4},
            {id:6,text:"追加评价",type:5}   
        ],
        types:1,
        data:[],
        navs:[
          {id:1,text:'首页',icon:'\ue61d',path:''},
          {id:2,text:'搜索',icon:'\ue60b',path:''},
          {id:3,text:'购物车',icon:'\ue602',path:''},
          {id:4,text:'我的商城',icon:'\ue605',path:''},
          {id:5,text:'消息',icon:'\ue61b',path:''}            
        ],
        isshow:false,
    }
    this.retutop = this.retutop.bind(this)
    // this.getData = this.getData.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({isshow:!this.state.isshow});
  }
  getData(type,id){
    axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_evaluate&goods_id="+localStorage.Good+"&type="+type+"&curpage=1&page=100").then((result)=>(
      this.setState({data:result.data.datas.goods_eval_list})
    ))      
    this.setState({types:id})
  }
  retutop(){
    this.props.history.go(-1)
  }
  componentWillMount(){
    axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_evaluate&goods_id="+localStorage.Good+"&type=&curpage=1&page=100").then((result)=>(
      this.setState({data:result.data.datas.goods_eval_list})
    ))
  }
  render() {
    let {buttons,types,navs} = this.state
    let data = this.state.data==''?'':this.state.data
    return (
      <div className="evaluate">
        <div className="header">
            <div className="left"><i className="iconfont" onClick={this.retutop}>&#xe675;</i></div>
            <DetailsHead/>
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
        <div className="content">
            <div className="con-top">
                {
                  buttons.map(item=>(
                    <button key={item.id} onClick={this.getData.bind(this,item.type,item.id)} className={types==item.id?'onbutton':''}>
                      {item.text}
                    </button>
                  ))
                }
            </div>
            <div className="con-bot" id="mescroll">
                {
                  data==""?<p>评论区空空如也</p>:data.map((item,i)=>(
                    <SmallEval data={item} key={i}/>
                  ))
                }
            </div>
        </div>
      </div>
    );
  }
}

export default Evaluate;