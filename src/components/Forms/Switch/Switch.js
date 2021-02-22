import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Switch component - visit `Controls` for configuration options
 */
const Switch = ({ 
  className, 
  disabled,
  label,
  size,
}) => (
  <label className={cn(
    className,
    'form-switch',
    { [`label-${size}`]: size },
    { [`input-${size}`]: size },
  )}>
    <input
      type='checkbox' 
      {... disabled ? { disabled } : {}}
    />
    <i className='form-icon'></i>{label}
  </label>
);

Switch.propTypes = {
  /**
   * Passed styles to switch component.
   */
  className: PropTypes.string,
  /**
   * Disables Switch component when enabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label displays next to Switch component.
   */
  label: PropTypes.string,
  /**
   * Sets the size of the component.
   */
  size: PropTypes.oneOf(['sm', 'lg']),
};

Switch.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  size: null,
};

export default Switch;
