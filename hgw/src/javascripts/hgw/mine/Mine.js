import React, { Component } from 'react';

class Mine extends Component {
  render() {
    return (
      <div className="mine">
          {this.props.children}
      </div>
    );
  }
}

export default Mine;
