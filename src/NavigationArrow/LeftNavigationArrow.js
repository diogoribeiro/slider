import React from 'react';
import PropTypes from 'prop-types';

import NavigationArrow from '@/NavigationArrow';

import leftArrow from '@/assets/left-arrow.svg';

import '@/NavigationArrow/NavigationArrow.css';

const LeftNavigationArrow = ({
  onClick,
}) => (
  <NavigationArrow
    onClick={onClick}
    className="arrow-container left"
    label="Previous item"
    arrow={leftArrow}
  />
);

LeftNavigationArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LeftNavigationArrow;
