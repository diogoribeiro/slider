import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ItemSelector from '@/ItemSelector';
import Stage from '@/Stage';

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

function renderArrow(totalItems, onClick, factor, label, className, arrow) {
  if (totalItems <= 1) {
    return null;
  }

  return (
    <div className={`arrow-container ${className}`}>
      <button onClick={() => onClick(factor)} aria-label={label} className="arrow" type="button">
        <img src={arrow} aria-hidden="true" alt={label} />
      </button>
    </div>
  );
}

function renderLeftArrow(totalItems, onClick) {
  return renderArrow(totalItems, onClick, PREVIOUS_ITEM, 'Previous item', 'left', leftArrow);
}

function renderRightArrow(totalItems, onClick) {
  return renderArrow(totalItems, onClick, NEXT_ITEM, 'Next item', 'right', rightArrow);
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

const Slider = ({ children = [], customItemSelector: CustomItemSelector }) => {
  const items = [children].flat();
  const [currentItem, setCurrentItem] = useState(0);
  const onClickArrow = (factor) => setCurrentItem(nextItem(factor, currentItem, items.length));
  const onClickItemSelector = (item) => setCurrentItem(item);

  return (
    <div className="container">
      {renderLeftArrow(items.length, onClickArrow)}
      <Stage onTouch={onClickArrow}>
        {renderItems(items, currentItem)}
      </Stage>
      {renderRightArrow(items.length, onClickArrow)}
      <CustomItemSelector currentItem={currentItem} items={items} onClick={onClickItemSelector} />
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  customItemSelector: PropTypes.func,
};

Slider.defaultProps = {
  children: [],
  customItemSelector: ItemSelector,
};

export default Slider;
