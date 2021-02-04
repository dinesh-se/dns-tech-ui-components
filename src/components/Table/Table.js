import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import TableHead from './TableHead';
import TableBody from './TableBody';

import { Button } from '../Button';

const StyledButton = styled(Button)`
  margin: 20px;
`;

const Table = ({
  className,
  headers,
  hover,
  rows,
  scroll,
  striped,
}) => (
  <table className={cn(
    className,
    'table',
    { 'table-hover' : hover },
    { 'table-scroll' : scroll },
    { 'table-striped' : striped },
  )}>
    <TableHead headers={headers} />
    <TableBody headers={headers} rows={rows} />
  </table>
);

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      styles: PropTypes.string,
    }),
  ),
  hover: PropTypes.bool,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.shape,
    }),
  ),
  scroll: PropTypes.bool,
  striped: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  headers: [],
  hover: true,
  rows: [],
  scroll: false,
  striped: true,
};

export default Table;