import React, { Component } from 'react';
import {Link} from "react-router"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindAction from '../../../../redux/action/FindAction'

class FindHeadbt extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let Find = this.props.Find.FindData.length?this.props.Find.FindData[1].explode3.item:''
    let Find1 = this.props.Find.FindData.length?this.props.Find.FindData[2].home3.item:''   

    return (
      <div className="findheadbt">
        <p><span></span>专题精选</p>
        <div className="img-top" >
            {
                Find?Find.map((item,i)=>(
                    
                    <Link key={i} to={'/details/'+'goods_id='+item.data}><img src={item.image}/></Link>
                    
                )):''
            }
        </div>
        <div className="img-bot" >
            {
                Find1?Find1.map((item,j)=>(
                    
                        <Link key={j} to={'/details/'+'goods_id='+item.data}><img src={item.image}/></Link>
                    
                )):'' 
            }
        </div>
      </div>
    )
  }
}

export default connect(state=>state,dispatch=>{
    return{
      FindAction:bindActionCreators(FindAction,dispatch)
    }
  })(FindHeadbt)