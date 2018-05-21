import React, { Component } from 'react';
import './App.css';

// Containers
import Left from './left.js';
import Right from './right.js';
import Foot from './foot.js';

// Logos
import btcLogoSVG from './img/Bitcoin.svg';
import fibSVG from './img/fib.svg';

// 3rd party
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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
      b: true,
      logo: true,
      circle: true,
      btcRotation: 0,
      bRotation: 0,
      overlayRotation: 0,
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
    this.bSwitch = this.bSwitch.bind(this);
    this.circleSwitch = this.circleSwitch.bind(this);
    this.logoSwitch = this.logoSwitch.bind(this);
    this.reset = this.reset.bind(this);
    this.overlayRotateChange = this.overlayRotateChange.bind(this);
  }

  reset() {
    this.setState({
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
      b: true,
      circle: true,
      btcRotation: 0,
      bRotation: 0,
      overlayRotation: 0,
      centerPoint: 'true-center',
      underlay: 'underlay1',
      overlay: 'no-overlay'
    })
  }

  // Rotates the Rectangle
  rotateChange(e) { this.setState({ rotation: e.target.value }) }

  // Rotates the Circle
  btcRotateChange(e) { this.setState({ btcRotation: e.target.value }) }

  // Rotates the Overlay
  overlayRotateChange(e) { this.setState({ overlayRotation: e.target.value }) }

  // Rotates the Bitcoin B
  bRotateChange(e) { this.setState({ bRotation: e.target.value }) }

  // Changes the Center Point
  onCenterChange(point) { this.setState({ centerPoint: point }) }

  // Change the Rectangle
  onBackdropChange(e) { this.setState({ underlay: e.value }) }

  // Change the Overlay
  onOverlayChange(e) {  
    let overlay = this.state.overlay + " " + e.value
    this.setState({ overlay }) 
  }

  // Toggle Crosshairs
  crossHairSwitch() { this.setState({ crossHair: this.state.crossHair ? false : true }) }

  // Toggle Fib Overlay
  fibSwitch() { this.setState({ fib: this.state.fib ? false : true }) }

  // Make Center Logo Transparent
  logoSwitch() { this.setState({ logo: this.state.logo ? false : true })  }

  // Add / Remove the Orange B
  bSwitch() { this.setState({ b: this.state.b ? false : true }) }

  // Add / Remove the Round Border
  circleSwitch() { this.setState({ circle: this.state.circle ? false : true }) }

  // Layout Control
  onLayoutChange(e) {
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

  render() {

    let centerPoints = [ 
        { value: 'True-Center',
          label: 'True-Center'
        },
        { value: 'X',
          label: 'X'
        },
        { value: 'Ƀ Dot',
          label: 'Ƀ Dot'
        }
      ],
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
          },
          {
            value: 'overlay4',
            label: 'u/casey_works'
          },
          {
            value: 'overlay5',
            label: 'u/casey_works'
          },
          {
            value: 'overlay6',
            label: 'u/casey_works'
          },
          {
            value: 'overlay7',
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
            <h6>Coin 	&#8736; : {this.state.btcRotation}&#176;</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.btcRotation} onChange={this.btcRotateChange}/>
          </div>

        <div className="setting" style={{ width: '100px' }}>
            <h6>'Overlay'	&#8736; : {this.state.overlayRotation}&#176;</h6>
            <input type="number" className="degInput" min="0" max="360" value={this.state.overlayRotation} onChange={this.overlayRotateChange}/>
            <input type="range" id="rotation" min="0" max="360" value={this.state.overlayRotation} onChange={this.overlayRotateChange}/>
          </div>

        <div className="setting" style={{ width: '100px' }}>
            <h6><del>Coin</del></h6>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
          </div>

          <div className="setting" style={{ width: '60px' }}>
            <h6>Circle</h6>
            <label className="switch">
                <input type="checkbox" onChange={this.circleSwitch} checked={this.state.circle} />
                <span className="slider round"></span>
              </label>
          </div>

          <div className="setting" style={{ width: '60px' }}>
            <h6><del>Grid</del></h6> 
            <label className="switch">
                <input type="checkbox" onChange={this.borderSwitch} />
                <span className="slider round"></span>
              </label> 
          </div>

          <div className="setting" style={{ width: '60px' }}>
            <h6>Logo</h6>
            <label className="switch">
                <input type="checkbox" onChange={this.logoSwitch} checked={this.state.logo} />
                <span className="slider round" onChange={this.logoSwitch}></span>
              </label>
          </div>

          <div className="setting" style={{ width: '60px' }}>
            <h6>Ƀ</h6>
            <label className="switch">
                <input type="checkbox" onChange={this.bSwitch}  checked={this.state.b}/>
                <span className="slider round" onChange={this.bSwitch} ></span>
              </label>
          </div>

         <div className="setting" style={{ width: '60px' }}>
            <h6>Crosshairs</h6> 
            <label className="switch">
                <input type="checkbox" onChange={this.crossHairSwitch} checked={this.state.crossHair} />
                <span className="slider round" onChange={this.crosshHairSwitch}></span>
            </label> 
          </div>


         <div className="setting" style={{ width: '60px' }}>
            <h6>Fibbonacci</h6> 
            <label className="switch">
                <input type="checkbox" onChange={this.fibSwitch} checked={this.state.fib} />
                <span className="slider round" onChange={this.fibSwitch}></span>
              </label> 
          </div>

          <div className="setting" style={{ width: '150px' }}>
            <h6>Underlay</h6>
            <Select
                    name="form-field-name"
                    clearable={false}
                    value={this.state.underlay}
                    onChange={this.onBackdropChange}
                    options={underlays}
                  />
          </div>

         <div className="setting" style={{ width: '150px' }}>
            <h6>Overlay</h6>
                  <Select
                    name="form-field-name"
                    clearable={false}
                    value={this.state.overlay}
                    onChange={this.onOverlayChange}
                    options={overlays}
                  />
          </div>

          <div className="setting" style={{ width: '150px' }}>
            <h6>Center Point</h6> 
            <Select
                    name="form-field-name"
                    clearable={false}
                    value={this.state.centerPoint}
                    onChange={this.onCenterChange}
                    options={centerPoints}
                  />
          </div>
          
      </div>

<br/>

      <div id="puzzleCont">

        <div id="words" style={{ transform: `rotate(${this.state.rotation}deg)` }}>
            {
            //   puzzleWords.objs.map((word, i) => {
            //   console.log(word);
            //   return <div
            //             className="word" 
            //             key={i}
            //             style={{ 
            //               transform: `rotate(${word.deg}deg) translate(${word.x},${word.y})`,
            //               position: 'absolute',
            //               zIndex: 100000000000,
            //               fontSize: word.size
            //             }}>{word.word}</div>
            // })
            }
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

      <div id="btcOrange" style={{ transform: `rotate(${this.state.bRotation}deg)`, opacity: this.state.b ? 0.5 : 0 }}>
        <img src={btcLogoSVG} alt="blah" />
      </div>

      <div id="fib" style={{ opacity: this.state.fib ? 1 : 0 }}>
        <img src={fibSVG} alt="fib" />
      </div>

      <div id="circleBorder" style={{ opacity: this.state.circle ? 1 : 0 }} ></div>
        {this.state.overlay.split(' ').map((over,p) => {
          console.log(p, over)
          return <div id="overlay" className={over} style={{ transform: `rotate(${this.state.overlayRotation}deg)` }}></div>
        })}

      <div id="puzzle" className={this.state.underlay} style={{ transform: `rotate(${this.state.rotation}deg)` }}></div>

    </div>

  </div>
    );
  }
}

export default App;
