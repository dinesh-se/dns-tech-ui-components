import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styled from 'styled-components'

const ProgressBarItem = styled.div`
  &.bar-item {
    width: ${({ progress }) => `${progress}%;`}
  }
`
/**
 * ProgressBar component indicates progress loading bar
 */
const ProgressBar = ({
  className,
  displayProgress,
  progress,
  small,
  tooltip,
}) => (
  <div 
    className={cn(
      className,
      'bar',
      { 'bar-sm' : small },
      { tooltip : tooltip },
    )}
    {... tooltip ? { 'data-tooltip' : `${progress}%` } : {}}
  >
    <ProgressBarItem 
      className='bar-item' 
      role='progressbar'
      progress={progress}
      aria-valuenow={progress} 
      aria-valuemin='0' 
      aria-valuemax='100'
    >
      {displayProgress && !small && (
        `${progress}%`
      )}
    </ProgressBarItem>
  </div>
)

ProgressBar.propTypes = {
  /**
   * Passed styles to the component
   */
  className: PropTypes.string,
  /**
   * Displays progress loading percentage inside progress bar when enabled
   */
  displayProgress: PropTypes.bool,
  /**
   * Progress count
   */
  progress: PropTypes.number,
  /**
   * Displays progress bar in small size.
   * Doesn't display progress text even if provided when enabled
   */
  small: PropTypes.bool,
  /**
   * Displays tooltip text containing percentage of progress
   */
  tooltip: PropTypes.bool,
}

ProgressBar.defaultProps = {
  className: '',
  displayProgress: false,
  progress: 0,
  small: false,
  tooltip: false,
}

export default ProgressBar
