import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Button component with configuration options
 */
const Button = ({
  className,
  disabled,
  label,
  loading,
  onClick,
  state,
  size,
  variant,
}) => (
  <button
    type="button"
    className={cn(
      className,
      'btn',
      { [`btn-${variant}`]: variant },
      { [`btn-${size}`]: size },
      { [`btn-${state}`]: state },
      { loading: loading }
    )}
    disabled={disabled}
    {...(disabled ? { tabIndex: -1 } : {})}
    onClick={onClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  /**
   * Passed styled to button
   */
  className: PropTypes.string,
  /**
   * Button disabled state if true
   */
  disabled: PropTypes.bool,
  /**
   * Button variants: default outline, primary and link
   */
  variant: PropTypes.oneOf(['', 'primary', 'link']),
  /**
   * Button states: success and error
   */
  state: PropTypes.oneOf(['', 'success', 'error']),
  /**
   * Button sizes: small, medium default and large
   */
  size: PropTypes.oneOf(['sm', '', 'lg', 'block']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button loading state if true
   */
  loading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  variant: '',
  state: '',
  size: '',
  loading: false,
  onClick: undefined,
};

export default Button;
