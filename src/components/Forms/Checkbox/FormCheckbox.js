import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Checkbox from './Checkbox'

/**
 * FormCheckbox component - visit `Controls` for configuration options
 */
const FormCheckbox = ({ 
  className, 
  disabled,
  indeterminate,
  inline,
  label,
  size,
  state,
  stateMessage,
}) => (
  <div className={cn(
    className,
    'form-group',
    { [`has-${state}`]: state },
  )}>
    <Checkbox
      disabled={disabled}
      indeterminate={indeterminate}
      inline={inline}
      label={label}
      size={size}
      type='checkbox'
    />
    { stateMessage && (
      <p className='form-input-hint'>{stateMessage}</p>
    )}
  </div>
)

FormCheckbox.propTypes = {
  /**
   * Passed styles to FormCheckbox component.
   */
  className: PropTypes.string,
  /**
   * Renders checkbox in disabled state, if true.
   */
  disabled: PropTypes.bool,
  /**
   * Renders checkbox in indeterminate state, if true.
   */
  indeterminate: PropTypes.bool,
  /**
   * Renders labels inline when multiple checkboxes are grouped.
   */
  inline: PropTypes.bool,
  /**
   * Label to be displayed along with checkbox.
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
}

FormCheckbox.defaultProps = {
  className: '',
  disabled: false,
  indeterminate: null,
  inline: false,
  label: '',
  size: null,
  state: null,
  stateMessage: '',
}

export default FormCheckbox
