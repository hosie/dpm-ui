import React from 'react';
import PropTypes from 'prop-types'
import { Loop24, Number_124} from '@carbon/icons-react';
import './Pad.css';

function Pad({onPadClick, isActive,sample,mode}) {
  return (
    <div className={isActive? "pad--active" : "pad"}>
      <div onClick={onPadClick} className="pad--inner-border">
        {
          typeof sample !== 'undefined' &&
          <div className="pad--info">
            <div className="pad--mode">
              {mode?(mode==='one-shot'?<Number_124/>:<Loop24 />):''}
            </div>
            <div className="pad--sample-name">
              {sample}
            </div>
          </div>
        }

      </div>
    </div>
  );
}

Pad.propTypes = {
  onPadClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  mode: PropTypes.string,
  sample: PropTypes.string
}

export default Pad;
