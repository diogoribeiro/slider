import React from 'react';

import Slider from '@/Slider';

export default {
  title: 'Slider',
  component: Slider,
};

const children = [
  <img key="Example 1" src="https://picsum.photos/seed/pic/1700/200" alt="Example 1" />,
  <img key="Example 2" src="https://picsum.photos/seed/sum/1700/300" alt="Example 2" />,
  <div key="Example 3">Example 3</div>,
  <img key="Example 4" src="https://picsum.photos/seed/picsum/1700/500" alt="Example 5" />,
];

export const SingleItem = () => <Slider><img src="https://picsum.photos/seed/single/1700/300" alt="Example 2" /></Slider>;
SingleItem.storyName = 'With a single item';

export const MultipleItems = () => <Slider>{children}</Slider>;
MultipleItems.storyName = 'With multiple items';


const CustomItemSelector = ({ currentItem, items }) => (
  <div>
    <div>{`Current Item: ${currentItem + 1}`}</div>
  </div>
);

export const WithCustomItemSelector = () => <Slider customItemSelector={CustomItemSelector}>{children}</Slider>;
WithCustomItemSelector.storyName = 'With custom item selector';
