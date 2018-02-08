import React, { Component } from 'react';

class SmallCar extends Component {
  constructor(props){
    super(props)
  }
  removeList(id){
    localStorage.removeItem([id])
    this.props.clic()
  }
  render() {
    let {data} = this.props
    return (
      <div className="smallcar">
            <input type="checkbox"/>
            <div className="car-right">
                <div><img src={data.img}/></div>
                <div>
                    <p><span>{data.name}</span><span onClick={this.removeList.bind(this,data.id)}>X</span></p>
                    <p><span>{data.price}</span><span><b>-</b><b>{data.num}</b><b>+</b></span></p>
                </div>
            </div>
      </div>
    );
  }
}

export default SmallCar;
