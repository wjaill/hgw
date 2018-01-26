import React, { Component } from 'react';
import {Link} from 'react-router';

class Footer extends Component {
	constructor(props){
    super(props)
    this.state = {
      navs:[
        {id:1,text:'首页',icon:'\ue61d',path:'/home'},
        {id:2,text:'发现',icon:'\ue602',path:'/find'},
        {id:3,text:'类目',icon:'\ue78e',path:'/type'},
        {id:4,text:'我的商城',icon:'\ue605',path:'/mine'}
      ]
    }
	}
  render() {
    let {navs} = this.state
    return (
        <div className="footer">
            {
               navs.map((item) => (
                   <Link to={item.path} key={item.id}>
                        <i className="iconfont">{item.icon}</i>
                        <span >{item.text}</span>
                    </Link>
               )) 
            }
        </div>
    )
  }
}

export default Footer;
