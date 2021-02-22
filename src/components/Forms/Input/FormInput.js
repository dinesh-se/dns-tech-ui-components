import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useId } from 'react-id-generator';

import Input from './Input';

/**
 * FormInput component - visit `Controls` for configuration options
 */
const FormInput = ({ 
  className,
  disabled,
  iconName,
  iconPosition,
  label,
  loading,
  pattern,
  placeholder,
  size,
  state,
  stateMessage,
  type,
}) => {
  const [htmlId] = useId();
  const hasIcon = iconName || loading;
  const iconPositionClass = iconPosition && hasIcon ? `has-icon-${iconPosition}` : (
    hasIcon ? 'has-icon-right' : '');

  return (
    <div className={cn(
      className,
      'form-group',
      { [`has-${state}`]: state },
    )}>
      {!!label && (
        <label 
          className={cn(
            'form-label',
            { [`label-${size}`]: size },
          )} 
          htmlFor={htmlId}
        >
          {label}
        </label>
      )}
      <div className={cn({ [iconPositionClass] : iconPositionClass })}>
        <Input
          type={type} 
          htmlId={htmlId}
          placeholder={placeholder}
          size={size}
          {... disabled ? { disabled } : {}}
          {... pattern ? { pattern } : {}}
        />
        { (iconName || loading) && (
          <i className={cn(
            'form-icon',
            { [`icon ${iconName}`]: !loading && iconName },
            { 'loading': loading },
          )}></i>
        )}
        { stateMessage && (
          <p className='form-input-hint'>{stateMessage}</p>
        )}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  /**
   * Passed styles to FormInput component.
   */
  className: PropTypes.string,
  /**
   * Sets input field in disabled state when enabled.
   */
  disabled: PropTypes.bool,
  /**
   * Icon name to be displayed on the FormInput component, requires `iconPosition` to be set for proper styling.
   * Refer spectre.css icons for list of supported icons.
   */
  iconName: PropTypes.string,
  /**
   * Positions the icon inside input field. Icon can be provided using `iconName` or set `loading` state.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Label for the FormInput component
   */
  label: PropTypes.string,
  /**
   * Loading state for the FormInput component, requires `iconPosition` to be set for proper styling.
   */
  loading: PropTypes.bool,
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
  state: PropTypes.oneOf(['success', 'error']),
  /**
   * Displays message underneath the element.
   */
  stateMessage: PropTypes.string,
  /**
   * Type for the FormInput component such as text, email, tel.
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
};

FormInput.defaultProps = {
  className: '',
  disabled: false,
  iconName: '',
  iconPosition: null,
  label: '',
  loading: false,
  pattern: '',
  placeholder: '',
  size: null,
  state: null,
  stateMessage: '',
  type: 'text',
};

export default FormInput;
