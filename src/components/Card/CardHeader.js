import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardHeader = ({
  className,
  otherContents,
  subtitle,
  title,
}) => (
  <div className={cn(className, 'card-header')}>
    {otherContents}
    <div className="card-title h5">
      {title}
    </div>
    {subtitle && (
      <div className="card-subtitle text-gray">
        {subtitle}
      </div>
    )}
  </div>
)

CardHeader.propTypes = {
  className: PropTypes.string,
  otherContents: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

CardHeader.defaultProps = {
  className: '',
  otherContents: null,
  subtitle: '',
}

export default CardHeader
