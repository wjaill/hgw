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
      data:''
    }
    this.retutop = this.retutop.bind(this)
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
    return (
      <div className="detaild">
        <div className="header">
            <div className="left"><Link><i className="iconfont" onClick={this.retutop}>&#xe675;</i></Link></div>
            <DetailsHead/>
            <div className="right" onClick={this.handleClick}><i className="iconfont">&#xe679;</i></div>
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
