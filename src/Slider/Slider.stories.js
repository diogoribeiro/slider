import React from 'react';

import Slider from '@/Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
};

const Template = (children) => <Slider>{children}</Slider>;

const children = [
  <div>Item #1</div>,
  <div>Item #2</div>,
];
export const Arrows = Template.bind({ children });
Arrows.args = { children };
