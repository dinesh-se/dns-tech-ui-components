import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Select component - visit `Controls` for configuration options
 */
const Select = ({ 
  className, 
  disabled,
  label,
  multiple, 
  options,
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
      {label && (
        <label className={cn(
          'form-label',
          { [`label-${size}`]: size },
        )}>
          {label}
        </label>
      )}
      <select 
        className={cn(
          className, 
          'form-select',
          { [`select-${size}`]: size }
        )}
        disabled={disabled}
        {... multiple ? { multiple: true } : {} }
      >
        <option>Choose an option</option>
        {options.map((option, idx) => (
          <option key={`${idx}-${option}`}>{option}</option>
        ))}
      </select>
      { stateMessage && (
        <p className='form-input-hint'>{stateMessage}</p>
      )}
    </div>
  );
};

Select.propTypes = {
  /**
   * Passed styles to select component.
   */
  className: PropTypes.string,
  /**
   * Disables Select component when enabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label for select dropdown.
   */
  label: PropTypes.string,
  /**
   * Enables multiple selection of options, if true.
   */
  multiple: PropTypes.bool,
  /**
   * Array of options to be rendered inside Select component.
   */
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  /**
   * Sets the size of the component.
   */
  size: PropTypes.oneOf(['sm', 'lg']),
  /**
   * Sets the success or error state for the component.
   */
  state: PropTypes.oneOf(['success', 'error']),
  /**
   * Displays message underneath the element.
   */
  stateMessage: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  multiple: false,
  size: null,
  state: null,
  stateMessage: '',
};

export default Select;
