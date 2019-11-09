import React from 'react';
import './App.css';

import PadBank from './PadBank.js'
import PadConfigContainer from './PadConfigContainer.js'
import HeaderContainer from './HeaderContainer.js'

function App() {
  return (
    <div className="App">

      <HeaderContainer>
      </HeaderContainer>
      <PadBank>
      </PadBank>
      <PadConfigContainer>
      </PadConfigContainer>

    </div>
  );
}

export default App;
