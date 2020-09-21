import React from 'react';

import NavigationArrow from '@/NavigationArrow';

import leftArrow from '@/assets/left-arrow.svg';

import '@/NavigationArrow/NavigationArrow.css';

export default {
  title: 'NavigationArrow',
  component: NavigationArrow,
};

export const NavigationArrowExample = () => (
  <NavigationArrow
    onClick={() => {}}
    className="arrow-container left"
    label="Previous item"
    arrow={leftArrow}
  />
);
