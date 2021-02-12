import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import TableHead from './TableHead';
import TableBody from './TableBody';

const NoDataRow = styled.div`
  line-height: 50px;
  text-align: center;
`;

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
);

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      displayText: PropTypes.string.isRequired,
    }),
  ).isRequired,
  hover: PropTypes.bool,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.shape(),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  scroll: PropTypes.bool,
  striped: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  hover: true,
  rows: [],
  scroll: false,
  striped: true,
};

export default Table;
