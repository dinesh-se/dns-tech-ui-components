import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Input = ({ 
  className,
  disabled,
  htmlId,
  pattern,
  placeholder,
  size,
  type,
}) => (
  <input 
    className={cn(
      className, 
      'form-input',
      { [`input-${size}`]: size },
    )} 
    type={type}
    placeholder={placeholder} 
    {... htmlId ? { id: htmlId } : {}}
    {... disabled ? { disabled } : {}}
    {... pattern ? { pattern } : {}}
  />
)

Input.propTypes = {
/**
   * Passed styles to FormInput component.
   */
  className: PropTypes.string,
  /**
   * Sets input field in disabled state when enabled.
   */
  disabled: PropTypes.bool,
  /**
   * Unique html id for the input element
   */
  htmlId: PropTypes.string,
  /**
   * Regex pattern for input field validation. Error state styles are applied based on validation.
   */
  pattern: PropTypes.string,
  /**
   * Placeholder text for FormInput component.
   */
  placeholder: PropTypes.string,
  /**
   * Sets the size of the component.
   */
  size: PropTypes.oneOf(['sm', 'lg']),
  /**
   * Sets the success or error state for the component.
   */
  type: PropTypes.oneOf([
    'text',
    'email',
    'url',
    'search',
    'tel',
    'password',
    'number',
    'date',
    'color',
    'file',
  ]),
}

Input.defaultProps = {
  className: '',
  disabled: false,
  htmlId: null,
  pattern: '',
  placeholder: '',
  size: null,
  type: 'text',
}

export default Input
