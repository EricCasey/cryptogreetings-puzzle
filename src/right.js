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
          <li>"+1"</li>
          <li>"It's solvable."</li>
          <li>"5 orientations between -60 & 60deg"</li>
        </ol>
        <h2>Pairs</h2>
        <ul>
          <li>ALMOST OPEN</li>
          <li>CODE EASILY</li>
          <li>ATTACK EARLY</li>
        </ul>
        </div>

      </div>
    );
  }
}

export default Right;
