import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Label component - displays text as a label
 * Visit `Controls` for options
 */
const Label = ({ 
  className, 
  rounded, 
  text, 
  type 
}) => (
  <span className={cn(
    className,
    'label',
    { [`label-${type}`]: type },
    { 'label-rounded': rounded },
  )}>
    {text}
  </span>
);

Label.propTypes = {
  /**
   * Passed styles to Label component.
   */
  className: PropTypes.string,
  /**
   * Displays label with rounded borders when enabled
   */
  rounded: PropTypes.bool,
  /**
   * Text to be displayed as label
   */
  text: PropTypes.string.isRequired,
  /**
   * Supported types
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
};

Label.defaultProps = {
  className: '',
  rounded: false,
  type: null,
};

export default Label;
