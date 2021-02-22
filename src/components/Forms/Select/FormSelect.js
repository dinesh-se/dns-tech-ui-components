import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Select from './Select';

/**
 * FormSelect component - visit `Controls` for configuration options
 */
const FormSelect = ({ 
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
      <Select 
        disabled={disabled}
        multiple={multiple}
        options={options}
        size={size}
      />
      { stateMessage && (
        <p className='form-input-hint'>{stateMessage}</p>
      )}
    </div>
  );
};

FormSelect.propTypes = {
  /**
   * Passed styles to select component.
   */
  className: PropTypes.string,
  /**
   * Disables FormSelect component when enabled.
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
   * Array of options to be rendered inside FormSelect component.
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

FormSelect.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  multiple: false,
  size: null,
  state: null,
  stateMessage: '',
};

export default FormSelect;
