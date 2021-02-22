import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Radio component - visit `Controls` for configuration options
 */
const Radio = ({ 
  className,
  disabled,
  inline,
  name,
  options,
  size,
}) => (
  <Fragment>
    {options.map((option, idx) => (
      <label
        className={cn(
          className,
          'form-radio',
          { 'form-inline': inline },
          { [`input-${size}`]: size }
        )}
        key={`${idx}-${option}`}
      >
        <input 
          type='radio' 
          name={name} 
          {... disabled ? { disabled } : {}}
        />
        <i className='form-icon'></i>{option}
      </label>
    ))}
  </Fragment>
);

Radio.propTypes = {
  /**
   * Passed styles to radio component.
   */
  className: PropTypes.string,
  /**
   * Renders radio buttons in disabled state, if true.
   */
  disabled: PropTypes.bool,
  /**
   * Renders radio button group inline.
   */
  inline: PropTypes.bool,
  /**
   * Label for radio group.
   */
  label: PropTypes.string,
  /**
   * Unique name for the radio group.
   */
  name: PropTypes.string.isRequired,
  /**
   * Array of radio buttons to be rendered.
   */
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
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

Radio.defaultProps = {
  className: '',
  disabled: false,
  inline: false,
  label: '',
  size: null,
  state: null,
  stateMessage: '',
};

export default Radio;
