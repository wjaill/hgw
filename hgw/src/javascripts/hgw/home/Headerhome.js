import React, { Component } from 'react';
import {Link} from "react-router"

class Headerhome extends Component {
  render() {
    return (
      <div className="headerhome">
        	<div><img src="http://www.hangowa.com/wap/images/home_logo.png"/></div>
          <div>
            <Link to="/"><i className="iconfont">&#xe60b;</i></Link>
            <Link to="/"><i className="iconfont">&#xe602;</i></Link>
          </div>
      </div>
    );  
  }
}

export default Headerhome;
