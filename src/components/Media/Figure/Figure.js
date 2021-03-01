import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Figure component to render image with optional caption
 * Supports custom styles passed to img tag directly
 * Visit `Controls` for complete configuration
 */
const Figure = ({ 
  altText,
  caption,
  captionPosition, 
  className, 
  fit,
  imageStyles,
  src,
}) => {
  const fitStyleClass = fit === 'responsive' ? 'img-responsive' : `img-fit-${fit}`

  return (
    <figure className={cn(className, 'figure')}>
      <img 
        className={cn({ [fitStyleClass] : fit && fitStyleClass })}
        css={imageStyles}
        src={src}
        alt={altText}
      />
      {caption && (
        <figcaption 
          className={cn(
            'figure-caption',
            { [`text-${captionPosition}`] : captionPosition }
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

Figure.propTypes = {
  /**
   * Text to be displayed when image fails to load.
   */
  altText: PropTypes.string,
  /**
   * Caption that displays under the text.
   */
  caption: PropTypes.string,
  /**
   * Position of the caption text.
   */
  captionPosition: PropTypes.oneOf(['center', 'left', 'right']),
  /**
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * Image fit inside the container
   */
  fit: PropTypes.oneOf(['contain', 'cover', 'responsive']),
  /**
   * Passed styles to img tag
   */
  imageStyles: PropTypes.string,
  /**
   * Source URL or path to the image
   */
  src: PropTypes.string,
}

Figure.defaultProps = {
  altText: '',
  caption: '',
  captionPosition: 'center',
  className: '',
  fit: null,
  imageStyles: '',
  src: '',
}

export default Figure
