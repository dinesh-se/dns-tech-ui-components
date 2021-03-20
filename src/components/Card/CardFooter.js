import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardFooter = ({
  className,
  children,
}) => {
  return (
    <div className={cn(className, 'card-footer')}>
      {children}
    </div>
  )
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

CardFooter.defaultProps = {
  className: '',
}

export default CardFooter
