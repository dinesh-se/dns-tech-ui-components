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
  state,
  stateMessage,
}) => {
  return (
    <div className={cn(
      className,
      'form-group',
      { [`has-${state}`]: state },
    )}>
      <label className={cn(
        'form-switch',
        { [`label-${size}`]: size },
        { [`input-${size}`]: size },
      )}>
        <input
          type='checkbox' 
          disabled={disabled}
        />
        <i className='form-icon'></i>{label}
      </label>
      { stateMessage && (
        <p className='form-input-hint'>{stateMessage}</p>
      )}
    </div>
  );
};

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
  /**
   * Sets the error state for the component.
   */
  state: PropTypes.oneOf(['error']),
  /**
   * Displays message underneath the element.
   */
  stateMessage: PropTypes.string,
};

Switch.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  size: null,
  state: null,
  stateMessage: '',
};

export default Switch;
