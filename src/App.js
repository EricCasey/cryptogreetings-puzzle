import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Left from './left.js';
import Right from './right.js';
import Foot from './foot.js';

import bip from './objects/bip39.js'; // 
import eightyFive from './objects/85-words'; // u/toshiromiballza
import innerBip from './objects/inner-bip39'; // u/eywede

import puzzleWords from './objects/all-words'; // CLEAN LIST

import btcLogoSVG from './img/Bitcoin.svg';

// 3rd party
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

// notes
// > Little dot could be center
// > X could be center
// > center could be center
// > 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        right: false,
        left: false,
        foot: false
      },
      rotation: 0,
      showX: true,
      fibb: false,
      btcRotation: 0,
      bRotation: 0,
      centerPoint: 'true-center'
    }
    this.rotateChange = this.rotateChange.bind(this);
    this.btcRotateChange = this.btcRotateChange.bind(this);
    this.bRotateChange = this.bRotateChange.bind(this);
    this.onCenterChange = this.onCenterChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  // Rotates the entire canvas
  rotateChange(e) { this.setState({ rotation: e.target.value }) }

  // Rotates the Circle
  btcRotateChange(e) { this.setState({ btcRotation: e.target.value }) }

  // Rotates the Bitcoin B
  bRotateChange(e) { this.setState({ bRotation: e.target.value }) }

  // Changes the Center Point
  onCenterChange(point) { this.setState({ centerPoint: point }) }

  onLayoutChange(e) {
    console.log(e.target.id);
    let layout = this.state.layout
    if(e.target.id === 'right') {
      layout.right = this.state.layout.right ? false : true
    } else if(e.target.id === 'left') {
      layout.left = this.state.layout.left ? false : true
    } if(e.target.id === 'foot') {
      layout.foot = this.state.layout.foot ? false : true
    }
    this.setState({ layout })
  }

  render() {
    console.log("State: ", this.state);
    console.log("BIP-0039 Words: ", bip.words);
    console.log("85 Words: ", eightyFive.words);
    console.log("innerBip: ", innerBip.words);
    console.log("Clean Words: ", puzzleWords);
    let centerPoints = [ 'true-center', 'X', 'B dot'];
    return (
      <div className="App">

      <Left layout={this.state.layout} layoutChange={this.onLayoutChange}/>
      <Right layout={this.state.layout} layoutChange={this.onLayoutChange}/>
      <Foot layout={this.state.layout} layoutChange={this.onLayoutChange}/>

        <div id="settings">

          <div className="setting">
            <h6>Puzzle Rotation = {this.state.rotation}deg</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.rotation} onChange={this.rotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.rotation} onChange={this.rotateChange}/>
          </div>

          <div className="setting">
            <h6>Circle Rotation = {this.state.btcRotation}deg</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
          </div>

        <div className="setting">
            <h6>'B' Rotation</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.bRotation} onChange={this.bRotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.bRotation} onChange={this.bRotateChange}/>
          </div>

          <div className="setting">
            <h6>Center Point</h6> 
            <Dropdown options={centerPoints} onChange={this.onCenterChange} value={this.state.centerPoint} placeholder="Select a header option" /> 
          </div>

          <div className="setting">
            <h6>Circles</h6>
          </div>

         <div className="setting">
            <h6>Gridlines</h6>  
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
                          transform: `rotate(${word.deg}deg) translate(${word.x},${word.y})`,
                          position: 'absolute',
                          zIndex: 100000000000,
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
