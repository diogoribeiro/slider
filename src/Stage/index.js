import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '@/Stage/Stage.css';

const NEXT_ITEM = 1;
const PREVIOUS_ITEM = -1;

function getEvent(event) {
  return event.changedTouches ? event.changedTouches[0] : event;
}

const Stage = ({ children, onTouch }) => {
  const [initialPosition, setInitialPosition] = useState(0);

  const initPosition = (e) => {
    const event = getEvent(e);
    setInitialPosition(event.clientX);
  };

  const stopPosition = (e) => {
    const event = getEvent(e);
    const finalPosition = event.clientX;

    if (finalPosition !== initialPosition) {
      const factor = finalPosition < initialPosition ? NEXT_ITEM : PREVIOUS_ITEM;
      onTouch(factor);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div className="stage" role="list" onTouchStart={initPosition} onTouchEnd={stopPosition} onMouseDown={initPosition} onMouseUp={stopPosition}>
      {children}
    </div>
  );
};

Stage.propTypes = {
  onTouch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Stage.defaultProps = {
  children: [],
};

export default Stage;
