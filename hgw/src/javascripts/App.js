import React, { Component } from 'react';
import Footer from "./hgw/footer/Footer.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
          <Footer/>
      </div>
    );
  }
}

export default App;
