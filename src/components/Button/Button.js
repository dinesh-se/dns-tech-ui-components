import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Button component - visit `Controls` for configuration options
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
   * Passed styles to Button component.
   */
  className: PropTypes.string,
  /**
   * Renders button in disabled state, if true.
   */
  disabled: PropTypes.bool,
  /**
   * Button variants: default outline, primary and link.
   */
  variant: PropTypes.oneOf(['primary', 'link']),
  /**
   * Button states: success and error.
   */
  state: PropTypes.oneOf(['success', 'error']),
  /**
   * Button sizes: small, medium default and large.
   */
  size: PropTypes.oneOf(['sm', 'lg', 'block']),
  /**
   * Button label content.
   */
  label: PropTypes.string.isRequired,
  /**
   * Button loading state, if true.
   */
  loading: PropTypes.bool,
  /**
   * Event handler on click.
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  variant: null,
  state: null,
  size: null,
  loading: false,
  onClick: undefined,
};

export default Button;
