import React from 'react';
import PropTypes from 'prop-types';

import '@/ItemSelector/ItemSelector.css';

const ItemSelector = ({ items, currentItem, onClick }) => {
  if (items.length < 2) {
    return null;
  }

  const selectors = items.map((item, index) => {
    const className = index === currentItem ? 'item-selector active' : 'item-selector';
    return (
      <button
        key={`item-selector-${item.key}`}
        aria-label={`Show item ${index + 1}`}
        className={className}
        onClick={() => onClick(index)}
        type="button"
      />
    );
  });

  return (
    <div className="items-selector-container">
      {selectors}
    </div>
  );
};

ItemSelector.propTypes = {
  items: PropTypes.node.isRequired,
  currentItem: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemSelector;
