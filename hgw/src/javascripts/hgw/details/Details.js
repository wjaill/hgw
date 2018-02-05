import React, { Component } from 'react'
import axios from "axios"
import DetailSwiper from "./DetailSwiper"
import DetailsCen from "./DetailsCen"
import DetailsBot from "./DetailsBot"

class Details extends Component {
  constructor(context,props){
    super(context,props)
    this.state={
      data:'',
      changetop:false
    }
    this.retutop = this.retutop.bind(this)
    this.tops = this.tops.bind(this)    
  }
  componentWillMount(){
    localStorage.Good=this.props.params.id.slice(9)*1
    axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_detail&goods_id="+localStorage.Good+"&key=").then((res)=>{
      this.setState({data:res.data.datas})
    })

  }
  retutop(){
    this.props.history.go(-1)
  }
  tops(){
    if(document.getElementsByClassName("details")[0].scrollTop >= 10){
      this.setState({changeto:true})
    }else{
      this.setState({changeto:false})
    }
  }
  render() {
    let {data,changeto} = this.state
    return (
      <div className="details" onScroll={this.tops}>
        	<DetailSwiper retutop={this.retutop} id={this} data={data} changeto={changeto}/>
          <DetailsCen data={data}/>
          <DetailsBot/>
      </div>
    );
  }
}

export default Details;
