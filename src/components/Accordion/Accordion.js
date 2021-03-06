import React from 'react'
import PropTypes from 'prop-types'

import AccordionItem from './AccordionItem'

/**
 * Accordion component renders with a title and accordion body
 * Visit `Controls` for complete configuration
 */
const Accordion = ({
  className,
  displayIcon,
  iconName,
  list,
  name,
  type,
}) => (
  <div className={className}>
    {list.map(({ title, body}) => (
      <AccordionItem
        body={body}
        displayIcon={displayIcon}
        iconName={iconName}
        key={title}
        name={name}
        title={title}
        type={type}
      />
    ))}
  </div>
)

Accordion.propTypes = {
  /**
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * Displays icon before each accodion title
   * Icon can be customized with `iconName` prop
   */
  displayIcon: PropTypes.bool,
  /**
   * Custom icon to be passed for accordion titles
   * Default: `icon-arrow-right`
   * Refer spectre.css icons for list of supported icons.
   */
  iconName: PropTypes.string,
  /**
   * Accordion list array. Each accordion to have a title and a body
   */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.node,
    })
  ),
  /**
   * Unique name per accordion list
   */
  name: PropTypes.string,
  /**
   * Emulates checkbox or radio style selection for opening accordion items
   * Default: Checkbox - Multiple accordion items can be opened at a time
   * Radio - Allows opening only one accordion item at a time
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),
}

Accordion.defaultProps = {
  className: '',
  displayIcon: true,
  iconName: '',
  list: [],
  name: '',
  type: 'checkbox',
}

export default Accordion
