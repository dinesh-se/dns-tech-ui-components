import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Badge component for displaying text with a badge attached to top right.
 * A dot will be displayed as badge, if badge text is not provided. 
 */
const Badge = ({
  className,
  badgeText,
  text,
}) => (
  <span 
    className={cn(
      className,
      'badge'
    )} 
    {... badgeText ? { 'data-badge' : badgeText } : {}}
  >
    {text}
  </span>
)

Badge.propTypes = {
  className: PropTypes.string,
  /**
   * Text or number to be displayed as badge on top right
   */
  badgeText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Text that will contain a badge
   */
  text: PropTypes.string,
}

Badge.defaultProps = {
  className: '',
  badgeText: '',
  text: '',
}

export default Badge
