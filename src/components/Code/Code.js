import React from 'react'
import PropTypes from 'prop-types'

/**
 * Code component - provides ability to highlight text inline
 * Visit `Controls` for options
 */
const Code = ({ 
  className, 
  text,
}) => (
  <code className={className}>{text}</code>
)

Code.propTypes = {
  /**
   * Passed styles to Code component.
   */
  className: PropTypes.string,
  /**
   * Text to be displayed as code block (inline).
   */
  text: PropTypes.string.isRequired,
}

Code.defaultProps = {
  className: '',
}

export default Code
