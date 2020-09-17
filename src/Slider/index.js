import React from 'react';
import PropTypes from 'prop-types';

import '@/Slider/Slider.css';

function renderItems(items) {
  return items.map((item, index) => {
    const className = index > 0 ? 'item' : 'item active';
    return <div className={className} key={item.key}>{item}</div>;
  });
}

const Slider = ({ children = [] }) => (
  <div>
    {renderItems(children)}
  </div>
);

Slider.propTypes = {
  children: PropTypes.node,
};

Slider.defaultProps = {
  children: [],
};

export default Slider;
