import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import bip from './objects/bip39.js'; // 
import eightyFive from './objects/85-words'; // u/toshiromiballza
import innerBip from './objects/inner-bip39'; // u/eywede

import puzzleWords from './objects/all-words'; // CLEAN LIST

import btcLogoSVG from './img/Bitcoin.svg';

// notes
// > Little dot could be center
// > X could be center
// > center could be center



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0,
      showX: true,
      btcRotation: 0,
      bRotation: 0
    }
    this.rotateChange = this.rotateChange.bind(this);
    this.btcRotateChange = this.btcRotateChange.bind(this);
    this.showX = this.showX.bind(this);
    this.bRotateChange = this.bRotateChange.bind(this);
  }

  rotateChange(e) {
    this.setState({ rotation: e.target.value });
  }
  btcRotateChange(e) {
    console.log("BTC Rotation, ", e.target.value)
    this.setState({ btcRotation: e.target.value });
  }

  showX() {
    console.log("showX: ", this.state.showX ? false : true);
    this.setState({ showX: this.state.showX ? false : true });
  }

  bRotateChange(e) {
    this.setState({ bRotation: e.target.value });
  }

  render() {
    console.log("State: ", this.state);
    console.log("BIP-0039 Words: ", bip.words);
    console.log("85 Words: ", eightyFive.words);
    console.log("innerBip: ", innerBip.words);
    console.log("Clean Words: ", puzzleWords);

    return (
      <div className="App">

        <div id="settings">

          <div className="setting">
            <h6>Puzzle Rotation = {this.state.rotation}deg</h6>
            <input type="range" id="rotation" min="0" max="360" value={this.state.rotation} onChange={this.rotateChange}/>
          </div>

          <div className="setting">
            <h6>Circle Rotation = {this.state.btcRotation}deg</h6>
            <input type="range" id="rotation" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
          </div>

        <div className="setting">
            <h6>'B' Rotation</h6>
            <input type="range" id="rotation" min="0" max="360" value={this.state.bRotation} onChange={this.bRotateChange}/>
          </div>

          <div className="setting">
            <h6>Show X Thingy</h6>
            <input type="radio" onChange={this.showX} value={this.state.showX} />
          </div>

          <div className="setting">
            <h6>Center Point</h6>  
          </div>
          
      </div>

<br/>

      <div id="puzzleCont">

        <div id="words" style={{ transform: `rotate(${this.state.rotation}deg)` }}>
            {puzzleWords.objs.map((word, i) => {
              console.log(word);
              return <div
                        className="word" 
                        key={i}
                        style={{ 
                          transform: `rotate(${word.deg}deg)`,
                          position: 'absolute',
                          zIndex: 100000000000,
                          bottom: word.x,
                          left: `calc(((100% - 1080px)/2) + ${word.y})px`,
                          fontSize: word.size
                        }}>{word.word}</div>
            })}
      </div>

      <div id="x">&#x2612;</div>

      <div id="btc" style={{ transform: `rotate(${this.state.btcRotation}deg)` }}>
          <img src="https://i.imgur.com/XklTJEN.png" alt="blah" />
      </div>

      <div id="crossHair">
        <div id="up"></div>
        <div id="ac"></div>
      </div>

      <div id="btcOrange" style={{ transform: `rotate(${this.state.bRotation}deg)` }}>
        <img src={btcLogoSVG} alt="blah" />
      </div>

      <div id="puzzle" style={{ transform: `rotate(${this.state.rotation}deg)` }}></div>

    </div>

  </div>
    );
  }
}

export default App;
