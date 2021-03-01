import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Radio from './Radio'

/**
 * FormRadio component - visit `Controls` for configuration options
 */
const FormRadio = ({ 
  className,
  disabled,
  inline,
  label,
  name,
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
      <Radio
        disabled={disabled}
        inline={inline}
        name={name}
        options={options}
        size={size}
      />
      { stateMessage && (
        <p className='form-input-hint'>{stateMessage}</p>
      )}
    </div>
  )
}

FormRadio.propTypes = {
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
}

FormRadio.defaultProps = {
  className: '',
  disabled: false,
  inline: false,
  label: '',
  size: null,
  state: null,
  stateMessage: '',
}

export default FormRadio
