import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Avatar component for displaying user profile picture in a circle
 * Visit `Controls` for list of configurations
 */
const Avatar = ({
  badge,
  badgeText,
  className,
  initial,
  presence,
  size,
  src,
}) => (
  <figure 
    className={cn(
      className,
      'avatar',
      { [`avatar-${size}`] : size },
      { badge : badge || badgeText },
    )}
    {... initial ? { 'data-initial' : initial } : {}}
    {... badgeText ? { 'data-badge' : badgeText } : {}}
  >
    {src && (
      <img 
        src={src} 
        alt={initial} 
      />
    )}
    {presence && (
      <i className={cn('avatar-presence', presence)}></i>
    )}
  </figure>
)

Avatar.propTypes = {
  /**
   * Displays button in badge mode (dot on top right) when enabled
   */
  badge: PropTypes.bool,
  /**
   * Text or number to be displayed as badge on top right
   */
  badgeText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * A fallback text to be displayed in case if image is failed to load or
   * image is not provided
   */
  initial: PropTypes.string,
  /**
   * Displays user status
   */
  presence: PropTypes.oneOf(['online', 'busy', 'away', 'offline']),
  /**
   * Supported sizes for avatars
   */
  size: PropTypes.oneOf(['xs', 'sm', 'm', 'lg', 'xl']),
  /**
   * Source of image to be displayed as avatar
   */
  src: PropTypes.string,
}

Avatar.defaultProps = {
  badge: false,
  badgeText: '',
  className: '',
  initial: '',
  presence: null,
  size: 'm',
  src: '',
}

export default Avatar
