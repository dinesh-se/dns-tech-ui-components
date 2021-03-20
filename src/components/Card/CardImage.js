import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardImage = ({
  className,
  src,
}) => (
  <div className={cn(className, 'card-image')}>
    <img 
      className="img-responsive"
      src={src} 
    />
  </div>
)

CardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

CardImage.defaultProps = {
  className: '',
}

export default CardImage
