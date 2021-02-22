import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Select component - visit `Controls` for configuration options
 */
const Select = ({ 
  className, 
  disabled,
  multiple, 
  options,
  size,
}) => {
  return (
    <select 
      className={cn(
        className, 
        'form-select',
        { [`select-${size}`]: size }
      )}
      {... disabled ? { disabled } : {}}
      {... multiple ? { multiple } : {} }
    >
      <option>Choose an option</option>
      {options.map((option, idx) => (
        <option key={`${idx}-${option}`}>{option}</option>
      ))}
    </select>
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
};

Select.defaultProps = {
  className: '',
  disabled: false,
  multiple: false,
  size: null,
};

export default Select;
