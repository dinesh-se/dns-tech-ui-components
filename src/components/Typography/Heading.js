import React from 'react'
import PropTypes from 'prop-types'

/**
 * Heading compoent that finally renders as h1, h2, ...
 * Takes in the size as number with same `Heading` as name
 * Visit `Controls` for complete configuration
 */
const Heading = ({ 
  className, 
  size, 
  text 
}) => {
  const HeadingTag = `h${size}`

  return (
    <HeadingTag className={className}>{text}</HeadingTag>
  )
}

Heading.propTypes = {
  /**
   * Passed styles to the component.
   */
  className: PropTypes.string,
  /**
   * Heading size - supports HTML heading types i.e., 1 to 6
   */
  size: PropTypes.oneOf([1,2,3,4,5,6]),
  /**
   * Text to be rendered inside Heading component
   */
  text: PropTypes.string,
}

Heading.defaultProps = {
  className: '',
  size: 1,
  text: '',
}

export default Heading
