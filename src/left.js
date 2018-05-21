import React, { Component } from 'react';
import './App.css';

import bip from './objects/bip39.js'; // 
import eightyFive from './objects/85-words'; // u/toshiromiballza
import innerBip from './objects/innerbip'; // u/eywede

const dataSets = [
  { 
    name: 'Clean Words',
    user: 'u/casey_works',
    type: 'csv',
    path: './objects/all-words.js',
    desc: 'Evolving clean list of all words on the image',
    btcAdrr: ''
   },
   { 
    name: '85 Words',
    user: 'u/toshiromiballza',
    path: './objects/85-words.js',
    desc: 'the 85 BIP-0039 words in the inner circle',
    btcAddr: ''
   },
   { 
    name: 'BIP-0039.txt',
    user: 'x',
    path: './objects/85-words.js',
    desc: 'English BIP39 Seed Words',
    btcAddr: ''
   },
   { 
    name: 'whitepaper.txt',
    user: 'Satoshi Nakamoto',
    path: './objects/sathoshiWP.txt',
    desc: 'Satoshi Nakamotos Bitcoin Whitepaper',
    btcAddr: ''
   },
   { 
    name: 'inner-bip39',
    user: 'u/eywede',
    path: './objects/innerbip.js',
    desc: '',
    btcAddr: ''

   },
   { 
    name: '108 Words',
    user: 'u/themegalodonlives',
    path: './objects/108-words.js',
    desc: 'List of unique words and order they appear in. 108 in total = just less than half of 253 BIP words appearing (clue #1)',
    btcAddr: ''
   }
]

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.downloadData = this.downloadData.bind(this);
  }

  payloadGen(path) {
    try {
      return require(`${path}`)
    } catch (err) {
      console.log("Somethin's Fucky")
      return ''
    }
  }

  downloadData(set) {
    let e = document.createElement("a");
    let payload = this.payloadGen(dataSets[set.target.id].path);
    let file = new Blob([JSON.stringify(payload)], {type: 'text/plain'});
    e.href = URL.createObjectURL(file);
    e.download = `${dataSets[set.target.id].name}.txt`;
    e.click();
  }

  render() {

    return (
      <div 
      className="Left" 
      id="left"
      onClick={this.props.layoutChange}
      style={{ 
        width: this.props.layout.left ? '400px' : '30px' 
        }}>
        <h3 style={{ opacity: this.props.layout.left ? 0.2 : 1 }}>DATASETS & <del>FILTERS</del></h3>
        <div className="dataCont" style={{ opacity: this.props.layout.left ? 1 : 0 }}>
        <h2>DataSets</h2>
        <div className="DatasetList" style={{ display: this.props.layout.left ? 'block' : 'none' }}>
          {dataSets.map((set, i) => {
            return (
            <div className="dataset" key={i} id="left">
              <div className="dlBtn" id={i} onClick={this.downloadData}>
                <i className="fas fa-download" aria-hidden="false"></i>
              </div>
              <div className="rBtn" id={i}>
                <a href={`https://www.reddit.com/${set.user}`} target="_blank">
                  <i className="fab fa-reddit-alien" aria-hidden="false"></i>
                </a>
              </div>
              <h5 id="left">{set.name}</h5>
              <p id="left">{set.user}</p>
              <p id="left">{set.desc}</p>
            </div>
          )
          })}
        </div>
        </div>

      </div>
    );
  }
}

export default Left;
