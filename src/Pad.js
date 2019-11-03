import React from 'react';
import PropTypes from 'prop-types'
import './Pad.css';

function Pad({onPadClick, isActive}) {
  return (
    <div className={isActive? "pad--active" : "pad"}>
      <div onClick={onPadClick} className="pad--inner-border">

      </div>
    </div>
  );
}

Pad.propTypes = {
  onPadClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Pad;
