import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Checkbox component - visit `Controls` for configuration options
 */
const Checkbox = ({ 
  className, 
  disabled,
  indeterminate,
  inline,
  label,
  size,
}) => {
  const checkboxRef = useRef()

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <label className={cn(
      'form-checkbox',
      { 'form-inline': inline },
      { [`label-${size}`]: size },
      { [`input-${size}`]: size }
    )}>
      <input
        ref={checkboxRef}
        className={cn(className, 'checkbox')}
        type='checkbox'
        {... disabled ? { disabled } : {}}
      />
      <i className='form-icon'></i>{label}
    </label>
  )
}

Checkbox.propTypes = {
  /**
   * Passed styles to Checkbox component.
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
}

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  indeterminate: null,
  inline: false,
  label: '',
  size: null,
}

export default Checkbox
