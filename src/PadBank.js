import React from 'react';
import './PadBank.css';
import PadContainer from './PadContainer.js';

function PadBank() {
  let padBank = []
  let padId=0
  for(let row=0;row<4;row++){
    let padRow=[]
    for(var column=0;column<4;column++){
      padRow.push(<PadContainer padId={padId} key={column}></PadContainer>)
      padId++
    }
    padBank.push(<div key={row} className="pad-bank--pad-row">{padRow}</div>)
  }
  padBank=padBank.reverse()
  return <div className="pad-bank">{padBank}</div>;
}

export default PadBank;
