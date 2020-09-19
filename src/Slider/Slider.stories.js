import React from 'react';

import Slider from '@/Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
};

const children = [
  <img src="https://picsum.photos/200/300" alt="Example 1" />,
  <div>Example 2</div>,
  <img src="https://picsum.photos/200/300" alt="Example 3" />,
];

export const Arrows = () => <Slider>{children}</Slider>;
