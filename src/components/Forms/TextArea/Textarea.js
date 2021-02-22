import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * TextArea component - visit `Controls` for configuration options
 */
const TextArea = ({ 
  className, 
  disabled,
  htmlId,
  placeholder, 
  rows,
}) => (
  <textarea 
    className={cn(className, 'form-input')} 
    type="text"
    placeholder={placeholder}
    rows={rows}
    {... htmlId ? { id: htmlId } : {}}
    {... disabled ? { disabled } : {}}
  />
);

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
   * Unique html id for the textarea element
   */
  htmlId: PropTypes.string,
  /**
   * Placeholder text for textarea element.
   */
  placeholder: PropTypes.string,
  /**
   * Sets the height of textarea.
   */
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  className: '',
  disabled: false,
  htmlId: null,
  placeholder: '',
  rows: 3,
};

export default TextArea;
