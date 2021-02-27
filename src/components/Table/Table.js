import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styled from 'styled-components'

import TableHead from './TableHead'
import TableBody from './TableBody'

const NoDataRow = styled.div`
  line-height: 50px;
  text-align: center;
`

/**
 * Table component - visit `Controls` for configuration options
 */
const Table = ({ className, headers, hover, rows, scroll, striped }) => (
  <div className='table'>
    <table
      className={cn(
        className,
        'table',
        { 'table-hover': hover },
        { 'table-scroll': scroll },
        { 'table-striped': striped },
      )}
    >
      <TableHead headers={headers} />
      {rows.length > 0 && <TableBody headers={headers} rows={rows} />}
    </table>
    {!rows.length && <NoDataRow className="table-no-data">No Data</NoDataRow>}
  </div>
)

Table.propTypes = {
  /**
   * Passed styles to Table component.
   */
  className: PropTypes.string,
  /**
   * Headers to be displayed in the table, requires unique key and text to be displayed.
   */
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      displayText: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /**
   * Enables hover effect on table rows, if true.
   */
  hover: PropTypes.bool,
  /**
   * Rows to be rendered on the table, columns object should have key names matching respective header keys.
   */
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.shape(),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  /**
   * Enables scrollbar in the table, if true.
   */
  scroll: PropTypes.bool,
  /**
   * Displays rows with striped desings, if true.
   */
  striped: PropTypes.bool,
}

Table.defaultProps = {
  className: '',
  hover: true,
  rows: [],
  scroll: false,
  striped: true,
}

export default Table
