import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Card = ({ 
  className,
  children,
}) => (
  <div className={cn(className, 'card')}>
    {children}
  </div>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  className: '',
}

export default Card
