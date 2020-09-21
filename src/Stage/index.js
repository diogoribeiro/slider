import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '@/Stage/Stage.css';

const NEXT_ITEM = 1;
const PREVIOUS_ITEM = -1;

const Stage = ({ children, onTouch }) => {
  const [initialPosition, setInitialPosition] = useState(0);

  const initPosition = (e) => {
    setInitialPosition(e.clientX);
  };

  const stopPosition = (e) => {
    const finalPosition = e.clientX;
    const factor = finalPosition < initialPosition ? PREVIOUS_ITEM : NEXT_ITEM;
    onTouch(factor);
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
