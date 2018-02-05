
import React, { Component } from 'react';
import {Link} from "react-router"
import SmallGood from "./SmallGood"

class DetailCen extends Component {
  constructor(props){
    super(props)
    this.refresh=this.refresh.bind(this)
  }
  refresh(){
    window.location.reload();
  }
  render() {
    let data = this.props.data==''?'':this.props.data
    return (
      <div className="detailcen">
      {
          data==''?'':<div><div className="content1">
            <p>{data.goods_info.goods_name}</p>
            <p>{data.goods_info.goods_jingle}</p>
            <p><span><b>￥</b>{data.goods_info.goods_price}</span><span>销量：{data.goods_info.goods_salenum}件</span></p>
            <div>
                <p><b><span>送至</span><span>{data.goods_hair_info.area_name}</span><span>{data.goods_hair_info.if_store_cn}</span></b><i className="iconfont">&#xe60c;</i></p>
                <p>{data.goods_hair_info.content}</p>
            </div>
            <p><span><b>已选</b><b>默认</b></span><i className="iconfont">&#xe612;</i></p>
        </div>
        <div className="content2">
            <p><span>商品评价</span><span>好评率 100%</span><span>({data.goods_info.evaluation_count}人评价)<i className="iconfont">&#xe612;</i></span></p>
            <p><span><i className="iconfont">&#xf0315;</i>{data.store_info.store_name}</span><i className="iconfont">&#xe612;</i></p>
            <p>
                <span><b>描述相符</b><b>{data.store_info.store_credit.store_deliverycredit.credit}</b><b>{data.store_info.store_credit.store_deliverycredit.percent_text}</b></span><span><b>描述相符</b><b>{data.store_info.store_credit.store_desccredit.credit}</b><b>{data.store_info.store_credit.store_desccredit.percent_text}</b></span><span><b>描述相符</b><b>{data.store_info.store_credit.store_servicecredit.credit}</b><b>{data.store_info.store_credit.store_servicecredit.percent_text}</b></span>
            </p>
        </div>
        <div  className="content3">
            <div>
                <p>店铺推荐</p>
                {
                    data.goods_commend_list.map((item,i)=>(
                        <Link key={i} to={'details/'+'goods_id='+item.goods_id} onClick={this.refresh}>
                            <SmallGood data={item}/>
                        </Link>
                    ))
                }
                
            </div>
        </div>
        <div  className="content4">
            <Link>点击查看详情</Link>
        </div>
        </div>
      }
        
      </div>
    )
  }
}

export default DetailCen;
