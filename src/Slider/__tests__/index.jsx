import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Slider from '@/Slider';

function buildSlider(children) {
  return <Slider>{children}</Slider>;
}

describe('Slider', () => {
  it('has only one visible item', () => {
    const children = [
      <div key="item #1">Item #1</div>,
      <div key="item #2">Item #2</div>,
    ];
    const { getByText } = render(buildSlider(children));

    expect(getByText('Item #1').parentElement).toHaveClass('active');
    expect(getByText('Item #2').parentElement).not.toHaveClass('active');
  });
});
