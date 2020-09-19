import React from 'react';

import Slider from '@/Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
};

const children = [
  <img src="https://picsum.photos/seed/pic/200/300" alt="Example 1" />,
  <img src="https://picsum.photos/seed/sum/800/300" alt="Example 2" />,
  <div>Example 4</div>,
  <img src="https://picsum.photos/seed/picsum/200/600" alt="Example 5" />,
];

export const Arrows = () => <Slider>{children}</Slider>;
