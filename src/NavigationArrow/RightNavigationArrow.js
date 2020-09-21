import React from 'react';
import PropTypes from 'prop-types';

import NavigationArrow from '@/NavigationArrow';

import rightArrow from '@/assets/right-arrow.svg';

import '@/NavigationArrow/NavigationArrow.css';

const RightNavigationArrow = ({
  onClick,
}) => (
  <NavigationArrow
    onClick={onClick}
    className="arrow-container right"
    label="Next item"
    arrow={rightArrow}
  />
);

RightNavigationArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RightNavigationArrow;
