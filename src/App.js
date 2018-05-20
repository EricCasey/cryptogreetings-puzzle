import React, { Component } from 'react';
import './App.css';

import Left from './left.js';
import Right from './right.js';
import Foot from './foot.js';

import bip from './objects/bip39.js'; // 
import eightyFive from './objects/85-words'; // u/toshiromiballza
import innerBip from './objects/innerbip'; // u/eywede

import puzzleWords from './objects/all-words'; // CLEAN LIST

import btcLogoSVG from './img/Bitcoin.svg';
import fibSVG from './img/fib.svg';

// 3rd party
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

// notes
// > Little dot could be center
// > X could be center
// > center could be center
// > CSS is in all caps but not inWP


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
      crossHair: false,
      fib: false,
      logo: true,
      btcRotation: 0,
      bRotation: 0,
      centerPoint: 'true-center',
      underlay: 'underlay1',
      overlay: 'no-overlay'
    }
    this.rotateChange = this.rotateChange.bind(this);
    this.btcRotateChange = this.btcRotateChange.bind(this);
    this.bRotateChange = this.bRotateChange.bind(this);
    this.onCenterChange = this.onCenterChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.crossHairSwitch = this.crossHairSwitch.bind(this);
    this.onBackdropChange = this.onBackdropChange.bind(this);
    this.onOverlayChange = this.onOverlayChange.bind(this);
    this.fibSwitch = this.fibSwitch.bind(this);
    this.logoSwitch = this.logoSwitch.bind(this);
  }

  reset() {
    console.log("reset requested")
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
    this.setState({ layout });
  }

  onBackdropChange(e) {
    console.log(e);
    this.setState({ underlay: e.value })
  }
  onOverlayChange(e) {
    console.log(e);
    this.setState({ overlay: e.value })
  }

  crossHairSwitch() { this.setState({ crossHair: this.state.crossHair ? false : true }) }

  fibSwitch() { this.setState({ fib: this.state.fib ? false : true }) }

  logoSwitch() { this.setState({ logo: this.state.logo ? false : true })  }

  render() {
    // console.log("State: ", this.state);
    // console.log("BIP-0039 Words: ", bip.words);
    // console.log("85 Words: ", eightyFive.words);
    // console.log("innerBip: ", innerBip.words);
    // console.log("Clean Words: ", puzzleWords);
    let centerPoints = [ 'true-center', 'X', 'B dot'],
        underlays = [ 
          { 
            value: 'no-underlay', 
            label: 'no-underlay',
            class: 'no-underlay'
          },
          { 
            value: 'underlay1', 
            label: 'u/casey_works',
            class: 'underlay1'
          },
          { 
            value: 'underlay2', 
            label: 'u/Zyntra',
            class: 'underlay2'
          },
          { 
            value: 'underlay3', 
            label: 'u/kit_hod_jao',
            class: 'underlay3'
          },
          { 
            value: 'underlay4', 
            label: 'u/ANiMARelics',
            class: 'underlay4'
          },
          { 
            value: 'underlay5', 
            label: 'u/chipper256',
            class: 'underlay5'
          },
          { 
            value: 'underlay6', 
            label: 'u/CodeSpartan',
            class: 'underlay6'
          },
          { 
            value: 'underlay7', 
            label: 'u/coinhodler',
            class: 'underlay7'
          }
         ],
         overlays = [ 
          {
            value: 'no-overlay',
            label: 'no-overlay'
          },
           {
            value: 'overlay1-0deg',
            label: 'u/anon 0deg'
          },
          {
            value: 'overlay1-30deg',
            label: 'u/anon 30deg'
          },
          {
            value: 'overlay1-60deg',
            label: 'u/anon 60deg'
          },
          {
            value: 'overlay1-n30deg',
            label: 'u/anon -30deg'
          },
          {
            value: 'overlay1-n60deg',
            label: 'u/anon -60deg'
          },
          {
            value: 'overlay1-all',
            label: 'u/anon all'
          },
          {
            value: 'overlay2',
            label: 'u/casey_works'
          },
          {
            value: 'overlay3',
            label: 'u/casey_works'
          }
         ]
    return (
      <div className="App">

      <Left layout={this.state.layout} layoutChange={this.onLayoutChange}/>
      <Right layout={this.state.layout} layoutChange={this.onLayoutChange}/>
      <Foot layout={this.state.layout} layoutChange={this.onLayoutChange}/>

        <div id="settings">

          <div className="setting" onClick={this.reset} style={{ width: '45px', height: '40px' }}>
          <div id="reset">RESET</div>
          </div>

          <div className="setting" style={{ width: '150px' }}>
            <h6>Puzzle 	&#8736; : {this.state.rotation}&#176;</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.rotation} onChange={this.rotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.rotation} onChange={this.rotateChange}/>
          </div>

          <div className="setting" style={{ width: '100px' }}>
            <h6>Circle 	&#8736; : {this.state.btcRotation}&#176;</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
          </div>

        <div className="setting" style={{ width: '100px' }}>
            <h6>'B'	&#8736; : {this.state.bRotation}&#176;</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.bRotation} onChange={this.bRotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.bRotation} onChange={this.bRotateChange}/>
          </div>

          <div className="setting" style={{ width: '85px' }}>
            <h6>Circles</h6>
            <label className="switch">
                <input type="checkbox" onChange={this.borderSwitch} />
                <span className="slider round"></span>
              </label>
          </div>

          <div className="setting" style={{ width: '65px' }}>
            <h6>Logo</h6>
            <label className="switch">
                <input type="checkbox" onChange={this.logoSwitch} />
                <span className="slider round"></span>
              </label>
          </div>

         <div className="setting" style={{ width: '85px' }}>
            <h6>Gridlines</h6> 
            <label className="switch">
                <input type="checkbox" onChange={this.borderSwitch} />
                <span className="slider round"></span>
              </label> 
          </div>

         <div className="setting" style={{ width: '85px' }}>
            <h6>Crosshairs</h6> 
            <label className="switch">
                <input type="checkbox" onChange={this.crossHairSwitch} checked={this.state.crossHair} />
                <span className="slider round" onChange={this.crosshHairSwitch}></span>
            </label> 
          </div>


         <div className="setting" style={{ width: '85px' }}>
            <h6>Fibbonacci</h6> 
            <label className="switch">
                <input type="checkbox" onChange={this.fibSwitch} checked={this.state.fib} />
                <span className="slider round" onChange={this.fibSwitch}></span>
              </label> 
          </div>

          <div className="setting" style={{ width: '150px' }}>
            <h6>Underlay</h6>
            <Dropdown options={underlays} onChange={this.onBackdropChange} value={this.state.underlay} placeholder="Select an Underlay" />
          </div>

         <div className="setting" style={{ width: '150px' }}>
            <h6>Overlay</h6>
            <Dropdown options={overlays} onChange={this.onOverlayChange} value={this.state.overlay} placeholder="Select an Overlay" />
          </div>

          <div className="setting" style={{ width: '150px' }}>
            <h6>Center Point</h6> 
            <Dropdown options={centerPoints} onChange={this.onCenterChange} value={this.state.centerPoint} placeholder="Select a header option" /> 
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

      <div id="btc" style={{ 
                      transform: `rotate(${this.state.btcRotation}deg)`,
                      opacity: this.state.logo ? 1 : 0 }}>
          <img src="https://i.imgur.com/XklTJEN.png" alt="blah" />
      </div>

      <div id="crossHair" style={{ opacity: this.state.crossHair ? 1 : 0 }}>
        <div id="up"></div>
        <div id="ac"></div>
      </div>

      <div id="btcOrange" style={{ transform: `rotate(${this.state.bRotation}deg)` }}>
        <img src={btcLogoSVG} alt="blah" />
      </div>

      <div id="fib" style={{ opacity: this.state.fib ? 1 : 0 }}>
        <img src={fibSVG} alt="fib" />
      </div>

      <div id="overlay" className={this.state.overlay}></div>

      <div id="puzzle" className={this.state.underlay} style={{ transform: `rotate(${this.state.rotation}deg)` }}></div>

    </div>

  </div>
    );
  }
}

export default App;
