import React, { useState } from 'react';
import PropTypes from 'prop-types';

import leftArrow from '@/assets/left-arrow.svg';
import rightArrow from '@/assets/right-arrow.svg';

import '@/Slider/Slider.css';

const NEXT_ITEM = 1;
const PREVIOUS_ITEM = -1;

function renderItems(items, currentItem) {
  return items.map((item, index) => {
    const className = index === currentItem ? 'item active' : 'item';
    return <div className={className} key={item.key}>{item}</div>;
  });
}

function renderArrows(totalItems, onClick) {
  if (totalItems <= 1) {
    return null;
  }

  return (
    <div className="arrows-container">
      <button onClick={() => onClick(PREVIOUS_ITEM)} aria-label="Previous item" className="arrow" type="button">
        <img src={leftArrow} aria-hidden="true" alt="Previous item" />
      </button>
      <button onClick={() => onClick(NEXT_ITEM)} aria-label="Next item" className="arrow" type="button">
        <img src={rightArrow} aria-hidden="true" alt="Next item" />
      </button>
    </div>
  );
}

function nextItem(factor, currentItem, totalItems) {
  if (factor === NEXT_ITEM && currentItem === totalItems - 1) {
    return 0;
  }

  if (factor === PREVIOUS_ITEM && currentItem === 0) {
    return totalItems - 1;
  }

  return currentItem + factor;
}

const Slider = ({ children = [] }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const onClick = (factor) => setCurrentItem(nextItem(factor, currentItem, children.length));

  return (
    <div className="container">
      {renderItems(children, currentItem)}
      {renderArrows(children.length, onClick)}
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
};

Slider.defaultProps = {
  children: [],
};

export default Slider;