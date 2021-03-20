import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardBody = ({
  className,
  children,
}) => (
  <div className={cn(className, 'card-body')}>
    {children}
  </div>
)

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

CardBody.defaultProps = {
  className: '',
}

export default CardBody
