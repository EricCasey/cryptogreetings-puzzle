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
        <div id="donate">
          <div className="hoverDiv"><a href="https://www.reddit.com/r/Bitcoin/comments/8kk0pa/1_btc_is_hidden_in_this_puzzle_good_luck/?st=jhfb88eo&sh=2eb521cc" target="_blank">r/Bitcoin POST</a></div>
          <div className="hoverDiv"><a href="https://www.cryptogreetings.com/#utm_source=Casey_Works&utm_medium=Referral_2trickPony.tools&utm_campaign=r_bitcoin_post" target="_blank">CRYPTOGREETINGS</a></div>
          <div className="hoverDiv"><p>DONATE</p></div>
        </div>
      </div>
    );
  }
}

export default Foot;
