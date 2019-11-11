import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import PadConfig from './PadConfig.js'

// Basic Jest test
it('does not crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PadConfig
    isActive={true}
    isConfigPending={false}
    mode="one-shot"
    selectedFile={{"id":1,"filename":"bar"}}
    samplePath={[]}
    childDirs={[]}
    allFiles={[]}
    padId={1}
    changeMode={function(){}}
    changeSampleDirectory={function(){}}
    fileSelected={function(){}}
    onCancel={function(){}}
    onSubmit={function(){}}
    />, div);
})

// testing-library test
it('renders mode selector', () => {
  const { getByTestId } = render(<PadConfig
    isActive={true}
    isConfigPending={false}
    mode="one-shot"
    selectedFile={{"id":1,"filename":"bar"}}
    samplePath={[]}
    childDirs={[]}
    allFiles={[]}
    padId={1}
    changeMode={function(){}}
    changeSampleDirectory={function(){}}
    fileSelected={function(){}}
    onCancel={function(){}}
    onSubmit={function(){}}
    />);
  expect(getByTestId('mode-selector')).toBeInTheDocument();
});
