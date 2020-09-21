import React from 'react';

import ItemSelector from '@/ItemSelector';

export default {
  title: 'ItemSelector',
  component: ItemSelector,
};

const items = [
  <img src="https://picsum.photos/seed/pic/1700/200" alt="Example 1" />,
  <img src="https://picsum.photos/seed/sum/1700/300" alt="Example 2" />,
  <div>Example 3</div>,
  <img src="https://picsum.photos/seed/picsum/1700/500" alt="Example 5" />,
];

export const MultipleItems = () => <ItemSelector items={items} currentItem={2} onClick={() => {}} />;
MultipleItems.storyName = 'With multiple items';
