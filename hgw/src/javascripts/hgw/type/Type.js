import React, { Component } from 'react';

class Type extends Component {
  render() {
    return (
      <div className="type">
      	{this.props.children}
      </div>
    );
  }
}

export default Type;