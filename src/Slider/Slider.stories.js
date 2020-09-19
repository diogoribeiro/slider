import React from 'react';

import Slider from '@/Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
};

const children = [
  <img src="https://picsum.photos/seed/pic/1700/200" alt="Example 1" />,
  <img src="https://picsum.photos/seed/sum/1700/300" alt="Example 2" />,
  <div>Example 3</div>,
  <img src="https://picsum.photos/seed/picsum/1700/500" alt="Example 5" />,
];

export const SingleItem = () => <Slider><img src="https://picsum.photos/seed/single/1700/300" alt="Example 2" /></Slider>;
SingleItem.storyName = 'With a single item';

export const MultipleItems = () => <Slider>{children}</Slider>;
MultipleItems.storyName = 'With multiple items';
