import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ItemSelector from '@/ItemSelector';
import Stage from '@/Stage';

import '@/Slider/Slider.css';
import LeftNavigationArrow from '@/NavigationArrow/LeftNavigationArrow';
import RightNavigationArrow from '@/NavigationArrow/RightNavigationArrow';

const NEXT_ITEM = 1;
const PREVIOUS_ITEM = -1;

function renderItems(items, currentItem) {
  return items.map((item, index) => {
    const className = index === currentItem ? 'item active' : 'item';
    return <div className={className} key={item.key}>{item}</div>;
  });
}

function renderLeftArrow(totalItems, onClick, CustomLeftArrow) {
  if (totalItems <= 1) {
    return null;
  }

  return (
    <CustomLeftArrow onClick={() => onClick(PREVIOUS_ITEM)} />
  );
}

function renderRightArrow(totalItems, onClick, CustomRightArrow) {
  if (totalItems <= 1) {
    return null;
  }

  return (
    <CustomRightArrow onClick={() => onClick(PREVIOUS_ITEM)} />
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

const Slider = ({
  children = [],
  customItemSelector: CustomItemSelector,
  customLeftArrow: CustomLeftArrow,
  customRightArrow: CustomRightArrow,
}) => {
  const items = [children].flat();
  const [currentItem, setCurrentItem] = useState(0);
  const onClickArrow = (factor) => setCurrentItem(nextItem(factor, currentItem, items.length));
  const onClickItemSelector = (item) => setCurrentItem(item);

  return (
    <div className="container">
      {renderLeftArrow(items.length, onClickArrow, CustomLeftArrow)}
      <Stage onTouch={onClickArrow}>
        {renderItems(items, currentItem)}
      </Stage>
      {renderRightArrow(items.length, onClickArrow, CustomRightArrow)}
      <CustomItemSelector currentItem={currentItem} items={items} onClick={onClickItemSelector} />
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  customItemSelector: PropTypes.func,
  customLeftArrow: PropTypes.func,
  customRightArrow: PropTypes.func,
};

Slider.defaultProps = {
  children: [],
  customItemSelector: ItemSelector,
  customLeftArrow: LeftNavigationArrow,
  customRightArrow: RightNavigationArrow,
};

export default Slider;
