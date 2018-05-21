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
        <p>Last Updated: Mon May 21st 2018 1600 EST ||| CONTACT --> u/Casey_Works -or- Eric@Casey.Works</p>
        <div id="donate">
          <div className="hoverDiv"><a href="https://www.reddit.com/r/Bitcoin/comments/8kk0pa/1_btc_is_hidden_in_this_puzzle_good_luck/?st=jhfb88eo&sh=2eb521cc" target="_blank">r/Bitcoin POST</a></div>
          <div className="hoverDiv"><a href="https://www.cryptogreetings.com/#utm_source=Casey_Works&utm_medium=Referral_2trickPony.tools&utm_campaign=r_bitcoin_post" target="_blank">CRYPTOGREETINGS</a></div>
          <div className="hoverDiv"><a href="https://streamlabs.com/casey_works" target="_blank">DONATE</a></div>
        </div>
      </div>
    );
  }
}

export default Foot;
