import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router"
import RoutBot from "../bottom/RoutBot"
import Footer from "../footer/Footer"
import DetailsHead from "./DetailsHead"

class DetailD extends Component {
  constructor(props){
    super(props)
    this.state={
      data:'',
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
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({isshow:!this.state.isshow});
  }
  componentWillMount(){
    axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_body&goods_id="+localStorage.Good).then((res)=>{
      this.setState({data:res.data})
    })
  }
  retutop(){
    this.props.history.go(-1)
  }
  render() {
    let data = this.state.data==''?'':this.state.data
    let{navs} = this.state
    return (
      <div className="detaild">
        <div className="header">
            <div className="left"><Link><i className="iconfont" onClick={this.retutop}>&#xe675;</i></Link></div>
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
        <div className="section">
            <div dangerouslySetInnerHTML={{__html: data}} className="servers"/>
            <RoutBot/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default DetailD;
