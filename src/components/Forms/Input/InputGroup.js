import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useId } from 'react-id-generator';

/**
 * InputGroup component - combines multiple input elements and button as a group.
 * Visit `Controls` for configuration options.
 */
const InputGroup = ({ 
  addonText, 
  children, 
  className,
  size,
}) => { 
  const [htmlId] = useId();

  return (
    <div className={cn(className, 'input-group')}>
      {addonText && (
        <span className={cn(
          'input-group-addon',
          { [`addon-${size}`]: size},
        )}>
          {addonText}
        </span>
      )}
      {children.map((child, idx) => (
        cloneElement(child, { key: `${idx}-${htmlId}`, size })
      ))}
    </div>
  );
};

InputGroup.propTypes = {
  /* 
   * Addon text for input group
   */
  addonText: PropTypes.string,
  /* 
   * Child element(s) to be rendered in input group
   */
  children: PropTypes.node.isRequired,
  /**
   * Passed styles to InputGroup component.
   */
  className: PropTypes.string,
  /**
   * Button sizes: small, medium default and large.
   */
  size: PropTypes.oneOf(['sm', 'lg']),
};

InputGroup.defaultProps = {
  addonText: '',
  className: '',
  size: null,
};

export default InputGroup;
