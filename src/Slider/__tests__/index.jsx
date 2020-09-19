import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Slider from '@/Slider';

function buildSlider(children, customItemSelector) {
  return <Slider customItemSelector={customItemSelector}>{children}</Slider>;
}

const children = [
  <div key="item #1">Item #1</div>,
  <div key="item #2">Item #2</div>,
];

describe('Slider', () => {
  describe('with one child', () => {
    const slider = buildSlider([]);

    it('doesn\'t show the navigation arrows', () => {
      const { queryByLabelText } = render(slider);

      expect(queryByLabelText('Previous item')).not.toBeInTheDocument();
      expect(queryByLabelText('Next item')).not.toBeInTheDocument();
    });
  });

  describe('with multiple children', () => {
    const slider = buildSlider(children);

    it('has only one visible item', () => {
      const { getByText } = render(buildSlider(children));

      expect(getByText('Item #1').parentElement).toHaveClass('active');
      expect(getByText('Item #2').parentElement).not.toHaveClass('active');
    });

    it('shows the navigation arrows for multiple items', () => {
      const { getByLabelText } = render(slider);

      expect(getByLabelText('Previous item')).toBeInTheDocument();
      expect(getByLabelText('Next item')).toBeInTheDocument();
    });

    it('shows the next item on right arrow click', () => {
      const { getByText, getByLabelText } = render(slider);

      fireEvent.click(getByLabelText('Next item'));

      expect(getByText('Item #2').parentElement).toHaveClass('active');
    });

    it('shows the previous item on left arrow click', () => {
      const { getByText, getByLabelText } = render(slider);

      fireEvent.click(getByLabelText('Next item'));
      fireEvent.click(getByLabelText('Previous item'));

      expect(getByText('Item #1').parentElement).toHaveClass('active');
    });

    it('allows infinite', () => {
      const { getByText, getByLabelText } = render(slider);

      fireEvent.click(getByLabelText('Next item'));
      fireEvent.click(getByLabelText('Next item'));

      expect(getByText('Item #1').parentElement).toHaveClass('active');

      fireEvent.click(getByLabelText('Previous item'));

      expect(getByText('Item #2').parentElement).toHaveClass('active');
    });
  });

  describe('when click on the icon selector', () => {
    it('shows the selected item', () => {
      const { getByLabelText, getByText } = render(buildSlider(children));

      fireEvent.click(getByLabelText('Show item 2'));

      expect(getByText('Item #2').parentElement).toHaveClass('active');
    });
  });

  describe('with custom item selector', () => {
    /* eslint-disable react/prop-types */
    const CustomItemSelector = ({ currentItem, items }) => (
      <div>
        <span>{`Current Item: ${currentItem + 1}`}</span>
        {items.map((_item, index) => (index + 1))}
      </div>
    );

    it('shows the custom item selector', () => {
      const slider = buildSlider(children, CustomItemSelector);
      const { getByText } = render(slider);
      expect(getByText('Current Item: 1')).toBeInTheDocument();
    });
  });
});
