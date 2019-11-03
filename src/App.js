import React from 'react';
import './App.css';

import PadBank from './PadBank.js'
import PadConfigContainer from './PadConfigContainer.js'

function App() {
  return (
    <div className="App">
      <PadBank>
      </PadBank>
      <PadConfigContainer>
      </PadConfigContainer>
    </div>
  );
}

export default App;
