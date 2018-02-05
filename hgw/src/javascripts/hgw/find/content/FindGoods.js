import React, { Component } from 'react';
import Good from "../../home/content/Good"
import {Link} from "react-router"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindAction from '../../../../redux/action/FindAction'

class FindGoods extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let Find = this.props.Find.FindData.length?this.props.Find.FindData[3].goods:''
    let Find1 = this.props.Find.FindData.length?this.props.Find.FindData[4].goods:''
    return (
      <div className="findgoods">
      {
          Find?
            <div>
                <p className="findtitle1">{Find.title}</p>
                {
                    Find?Find.item.map((item,j)=>(
                    <Link key={j} to={'/details/'+'goods_id='+item.goods_id}>
                        <Good data={item}/>
                    </Link>
                    )):''
                }

            </div>
          :''
      }
      {
          Find1?
            <div>
                <p className="findtitle2">{Find1.title}</p>
                {
                    Find1?Find1.item.map((item,j)=>(
                    <Link key={j} to={'/details/'+'goods_id='+item.goods_id}>
                        <Good data={item}/>
                    </Link>
                    )):''
                }

            </div>
          :''
      }
        
      </div>
    );
  }
}

export default connect(state=>state,dispatch=>{
    return{
      FindAction:bindActionCreators(FindAction,dispatch)   //bindActionCreators 通过dispatch将action包裹 怎讲dispacth
    }
  })(FindGoods)