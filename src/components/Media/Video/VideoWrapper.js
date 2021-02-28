import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * VideoWrapper component for wrapping a video source
 * The source can be iframe or embed tags
 * By default videos are displayed in 16:9 ratio
 * Visit `Controls` for complete configuration
 */
const VideoWrapper = ({
  children,
  className,
  ratio,
}) => {
  return (
    <div className={cn(
      className,
      'video-responsive',
      { 'video-responsive-1-1' : ratio === '1:1' },
      { 'video-responsive-4-3' : ratio === '4:3' },
    )}>
      {children}
    </div>
  )
}

VideoWrapper.propTypes = {
  /**
   * HTML elements wrapped by the VideoWrapper component
   */
  children: PropTypes.node.isRequired,
  /**
   * Passed styles to the component.
   */
  className: PropTypes.string,
  /**
   * Aspect ratio for the video
   */
  ratio: PropTypes.oneOf(['1:1', '4:3']),
}

VideoWrapper.defaultProps = {
  className: '',
  ratio: null,
}

export default VideoWrapper
