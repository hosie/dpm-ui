import React from 'react';
import PropTypes from 'prop-types'
import './Pad.css';

function Pad({onPadClick, isActive,sample,mode}) {
  return (
    <div className={isActive? "pad--active" : "pad"}>
      <div onClick={onPadClick} className="pad--inner-border">
        {
          typeof sample !== 'undefined' &&
          <div>
            {mode?mode:'one-shot'}
            {sample}
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
