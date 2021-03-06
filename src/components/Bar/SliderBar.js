import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styled from 'styled-components'

const SliderBarItem = styled.div`
  &.bar-item {
    width: ${({ range }) => `${range}%;`}
  }
`

/**
 * SliderBar component enables range selection
 * Provides option for selecting numbers between two points
 */
const SliderBar = ({
  className,
  range,
  tooltip,
  toRange,
}) => {
  return (
    <div className={cn(
      className,
      'bar',
      'bar-slider',
    )}>
      <SliderBarItem 
        className='bar-item' 
        role='progressbar'
        range={range}
      >
        <button 
          className={cn(
            'bar-slider-btn',
            'btn',
            { tooltip : tooltip },
          )} 
          role='slider'
          {... tooltip ? { 'data-tooltip' : `${range}%` } : {}}
        ></button>
      </SliderBarItem>
      {typeof toRange === 'number' && (
        <SliderBarItem 
          className='bar-item' 
          role='progressbar'
          range={toRange}
        >
          <button 
            className={cn(
              'bar-slider-btn',
              'btn',
              { tooltip : tooltip },
            )} 
            role='slider'
            {... tooltip ? { 'data-tooltip' : `${toRange}%` } : {}}
          ></button>
        </SliderBarItem>
      )}
    </div>
  )
}

SliderBar.propTypes = {
  /** 
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * Range number for the slider
   */
  range: PropTypes.number,
  /**
   * Tooltip that displayed the currently selected range
   */
  tooltip: PropTypes.bool,
  /**
   * A second range number when provided displays two slider button
   * Useful for selecting numbers between a range
   */
  toRange: PropTypes.number,
}

SliderBar.defaultProps = {
  className: '',
  range: 0,
  tooltip: true,
  toRange: null,
}

export default SliderBar
