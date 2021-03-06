import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Breadcrumb component helps displaying the history of path
 */
const Breadcrumb = ({
  className,
  paths,
}) => (
  <ul className={cn(className, 'breadcrumb')}>
    {paths.map(({ linkText, text, url }) => (
      <li 
        className='breadcrumb-item'
        key={text + linkText}
      >
        {text}&nbsp;<a href={url || '#'}>{linkText}</a>
      </li>
    ))}
  </ul>
)

Breadcrumb.propTypes = {
  /**
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * Array of path details.
   */
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Displays as hyperlink
       */
      linkText: PropTypes.string,
      /**
       * Displays without hyperlink
       */
      text: PropTypes.string,
      /**
       * URL for the breadcrumb item
       * Navigates to the provided URL when clicked
       */
      url: PropTypes.string,
    }),
  ),
}

Breadcrumb.defaultProps = {
  className: '',
  paths: [],
}

export default Breadcrumb
