import React, { Component } from 'react';

class SmallEval extends Component {
  constructor(props){
    super(props)

  }
  render() {
    let data = this.props.data
    let items=[]
    let leng = data==''?0:data.geval_scores
    for(let i=0;i<leng;i++){
      items.push(<i key={i}></i>)
    }
    return (  
      <div className="smalleval">
        <p><img src={data.member_avatar}/><span>{data.geval_frommembername}</span></p>
        <p>
          {
            items
          }
         
        </p>
        <p>{data.geval_content}</p>
      </div>
    )
  }
}

export default SmallEval;
