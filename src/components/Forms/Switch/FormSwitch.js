import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Switch from './Switch'

/**
 * FormSwitch component - visit `Controls` for configuration options
 */
const FormSwitch = ({
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
      <Switch
        disabled={disabled}
        label={label}
        size={size}
      />
      { stateMessage && (
        <p className='form-input-hint'>{stateMessage}</p>
      )}
    </div>
  )
}

FormSwitch.propTypes = {
  /**
   * Passed styles to switch component.
   */
  className: PropTypes.string,
  /**
   * Disables FormSwitch component when enabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label displays next to FormSwitch component.
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

FormSwitch.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  size: null,
  state: null,
  stateMessage: '',
}

export default FormSwitch
