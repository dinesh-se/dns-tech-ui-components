import React from 'react'
import PropTypes from 'prop-types'

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
  className: PropTypes.string,
  size: PropTypes.oneOf([1,2,3,4,5,6]),
  text: PropTypes.string,
}

Heading.defaultProps = {
  className: '',
  size: 1,
  text: '',
}

export default Heading
