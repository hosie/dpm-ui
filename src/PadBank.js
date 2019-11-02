import React from 'react';
import './PadBank.css';
import Pad from './Pad.js';

function PadBank() {
  let padBank = []
  for(let row=0;row<4;row++){
    let padRow=[]
    for(var column=0;column<4;column++){
      padRow.push(<Pad key={column}></Pad>)
    }
    padBank.push(<div key={row} className="pad-bank--pad-row">{padRow}</div>)
  }
  return <div className="pad-bank">{padBank}</div>;
}

export default PadBank;
