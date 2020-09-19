import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ItemSelector from '@/ItemSelector';

const children = [
  <div key="item #1">Item #1</div>,
  <div key="item #2">Item #2</div>,
];

describe('ItemSelector', () => {
  const onClick = jest.fn();
  const itemSelector = <ItemSelector currentItem={0} items={children} onClick={onClick} />;

  describe('with multiple children', () => {
    it('renders selectors', () => {
      const { getByLabelText } = render(itemSelector);

      expect(getByLabelText('Show item 1')).toBeInTheDocument();
      expect(getByLabelText('Show item 2')).toBeInTheDocument();
    });

    it('shows the selected item', () => {
      const { getByLabelText } = render(itemSelector);

      fireEvent.click(getByLabelText('Show item 2'));

      expect(onClick).toHaveBeenCalled();
    });
  });
});
