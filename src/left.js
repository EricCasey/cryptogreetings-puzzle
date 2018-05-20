import React, { Component } from 'react';
import './App.css';

import bip from './objects/bip39.js'; // 
import eightyFive from './objects/85-words'; // u/toshiromiballza
import innerBip from './objects/inner-bip39'; // u/eywede

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
    user: 'u/',
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
    // console.log("dataRequest");
    // console.log(set.target.id)
    // console.log(dataSets[set.target.id]);
    let e = document.createElement("a");
    let payload = this.payloadGen(dataSets[set.target.id].path);
    // console.log(JSON.stringify(payload));
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
         <h5>DATASETS & FILTERS</h5>
        <div className="dataCont" style={{ opacity: this.props.layout.left ? 1 : 0 }}>
        <h2>DataSets</h2>
        <div className="DatasetList">
          {dataSets.map((set, i) => {
            return (
            <div className="dataset" key={i}>
              <div className="dlBtn" id={i} onClick={this.downloadData}>
                <i className="fas fa-download" aria-hidden="false"></i>
              </div>
              <h5>{set.name}</h5>
              <p>{set.user}</p>
              <p>{set.desc}</p>
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
