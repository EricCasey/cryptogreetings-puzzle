import React, { Component } from 'react';
import './App.css';

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div 
      className="Right" 
      id="right" 
      onClick={this.props.layoutChange} 
      style={{ 
        width: this.props.layout.right ? '350px' : '30px' 
        }}>
        <h5>HINTS</h5>
        <div className="hintBox" style={{ opacity: this.props.layout.right ? 1 : 0 }}>
        <h2>Shit OP Says:</h2>
        <ol>
          <li>"There's also some consolation prizes scattered in there, but let's not even talk about those for now ;)" - OP</li>
          <li>"You can throw at least half of those out. This is clue #1."</li>
          <li>"Thank you for noticing that. "One Wei" is a hidden gem (not related to puzzle though)"</li>
          <li>"Think in pairs (Clue #2)."</li>
          <li>"Code easily, attack early"</li>
          <li>"Lost transaction costs almost users."</li>
          <li>"00212121"</li>
          <li><del>"+1"</del>"+1"</li>
          <li>"It's solvable."</li>
          <li>"5 orientations between -60 & 60deg"</li>
          <li>"-1 (hint, not downvoting)"</li>
          <li>"To triumph one must look within. To Infinity and beyond. When you are close to home. X marks the spot."</li>
        </ol>
        <h2>Pairs</h2>
        <ul>
          <li>ALMOST OPEN</li>
          <li>CODE EASILY</li>
          <li>ATTACK EARLY</li>
        </ul>

        <h2>Resources</h2>
        <ul>
          <li>https://www.reddit.com/r/Bitcoin/comments/8kk0pa/1_btc_is_hidden_in_this_puzzle_good_luck/?sort=new&sh=3e9271fc&st=jhdywdjq</li>
          <li>https://www.browserling.com/tools/csv-append-column</li>
          <li>https://blockchain.info/address/3CcxyPhyvyc3S9UuPfu42GNZLvVVV11Uk8</li>
          <li>https://iancoleman.io/bip39/</li>
          <li>https://www.twitch.tv/casey_works</li>
          <li>https://www.cryptogreetings.com/#utm_source=Casey_Works&utm_medium=Referral_2trickPony.tools&utm_campaign=r_bitcoin_post</li>
          <li>https://github.com/helderdb/seedchecker</li>
          <li>https://docs.google.com/spreadsheets/d/166Ml9zkMxrlhHyLGm49VEWL6zNIPzl8fc6PMPqvBk9A/edit#gid=0</li>
          <li>https://www.jasondavies.com/wordcloud/</li>
          <li>https://dev.w3.org/html5/html-author/charref</li>
          <li>https://bitcoinsymbol.org/</li>
          <li>Ldquest  not a clue</li>
        </ul>
        </div>

      </div>
    );
  }
}

export default Right;
