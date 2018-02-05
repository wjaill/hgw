import React, { Component } from 'react';
import FindSwiper from "./FindSwiper"
import FindHeadbt from "./FindHeadbt"
import FindGoods from "./FindGoods"
import HomeBot from "../../bottom/RoutBot"

class FindContent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="findcontent" >
          <FindSwiper/>
          <FindHeadbt/>
          <FindGoods/>
          <HomeBot type={2}/>
      </div>
    );
  }
}

export default FindContent;