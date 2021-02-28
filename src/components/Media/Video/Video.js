import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Video component for displaying videos directly by passing source
 * By default videos are displayed in 16:9 ratio
 * Visit `Controls` for complete configuration
 */
const Video = ({
  className,
  ratio,
  src,
}) => (
  <video
    className={cn(
      className,
      'video-responsive',
      { 'video-responsive-1-1' : ratio === '1:1' },
      { 'video-responsive-4-3' : ratio === '4:3' },
    )}
    src={src}
  />
)

Video.propTypes = {
  /**
   * Passed styles to the component.
   */
  className: PropTypes.string,
  /**
   * Aspect ratio for the video
   */
  ratio: PropTypes.oneOf(['1:1', '4:3']),
  /**
   * Source URL or path for the video
   */
  src: PropTypes.string,
}

Video.defaultProps = {
  className: '',
  ratio: null,
  src: '',
}

export default Video
