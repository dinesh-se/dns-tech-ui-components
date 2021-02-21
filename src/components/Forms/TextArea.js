import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useId } from 'react-id-generator';

/**
 * TextArea component - visit `Controls` for configuration options
 */
const TextArea = ({ 
  className, 
  disabled,
  label, 
  placeholder, 
  rows,
  size,
  state,
  stateMessage,
}) => {
  const [htmlId] = useId();

  return (
    <div className={cn(
      className,
      'form-group',
      { [`has-${state}`]: state },
    )}>
      {!!label && (
        <label 
          className={cn(
            className, 
            'form-label',
            { [`label-${size}`]: size },
          )} 
          htmlFor={htmlId}
        >
          {label}
        </label>
      )}
      <textarea 
        className={cn(className, 'form-input')} 
        type="text" 
        id={htmlId}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
      />
      { stateMessage && (
        <p className='form-input-hint'>{stateMessage}</p>
      )}
    </div>
  );
};

TextArea.propTypes = {
  /**
   * Passed styles to textarea component.
   */
  className: PropTypes.string,
  /**
   * Sets disabled state to textarea field when enabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label for TextaArea component
   */
  label: PropTypes.string,
  /**
   * Placeholder text for textarea element.
   */
  placeholder: PropTypes.string,
  /**
   * Sets the height of textarea.
   */
  rows: PropTypes.number,
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

TextArea.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  placeholder: '',
  rows: 3,
  size: null,
  state: null,
};

export default TextArea;
