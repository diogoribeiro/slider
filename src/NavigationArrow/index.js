import React from 'react';
import PropTypes from 'prop-types';

const NavigationArrow = ({
  arrow,
  className,
  label,
  onClick,
}) => (
  <div className={className}>
    <button onClick={onClick} aria-label={label} className="arrow" type="button">
      <img src={arrow} aria-hidden="true" alt={label} />
    </button>
  </div>
);

NavigationArrow.propTypes = {
  arrow: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

NavigationArrow.defaultProps = {
  className: null,
};

export default NavigationArrow;
