import React, { Component } from 'react';
import './App.css';

class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div className="Foot">
        <p>FEEL FREE TO SEND YOUR DATA TO ME --> u/Casey_Works -or- Eric@Casey.Works</p>
        <div id="donate">DONATE?</div>
      </div>
    );
  }
}

export default Foot;
