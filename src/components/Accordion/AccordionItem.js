import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useId } from 'react-id-generator'

const AccordionItem = ({
  body,
  className,
  displayIcon,
  iconName,
  name,
  title,
  type,
}) => {
  const [htmlId] = useId(1, 'accordion-')
  const iconClass = iconName ? iconName : 'icon-arrow-right'

  return (
    <div className={cn(
      className,
      'accordion',
    )}>
      <input 
        type={type} 
        id={htmlId} 
        name={name} 
        hidden
      />
      <label 
        className='accordion-header' 
        htmlFor={htmlId}
      >
        {displayIcon && (
          <i className={cn(
            'icon',
            iconClass,
            'mr-1',
          )}></i>
        )}
        {title}
      </label>
      <div className='accordion-body'>
        {body}
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  /**
   * Body of the accordion item
   */
  body: PropTypes.node,
  /**
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * Custom icon to be passed for accordion titles
   * Default: `icon-arrow-right`
   * Refer spectre.css icons for list of supported icons.
   */
  displayIcon: PropTypes.bool,
  /**
   * Accordion list array. Each accordion to have a title and a body
   */
  iconName: PropTypes.string,
  /**
   * Unique name per accordion list
   */
  name: PropTypes.string,
  /**
   * Title text of the accordion item
   */
  title: PropTypes.string,
  /**
   * Emulates checkbox or radio style selection for opening accordion items
   * Default: Checkbox - Multiple accordion items can be opened at a time
   * Radio - Allows opening only one accordion item at a time
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),
}

AccordionItem.defaultProps = {
  body: null,
  className: '',
  displayIcon: true,
  iconName: '',
  name: '',
  title: '',
  type: 'checkbox',
}

export default AccordionItem
