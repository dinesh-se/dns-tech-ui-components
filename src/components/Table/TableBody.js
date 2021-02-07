import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import objectHash from 'object-hash';

const TableBody = ({ headers, rows }) => (
  <tbody>
    {rows.map(({ columns, id }, idx) => (
      <tr key={id || objectHash({ idx, ...columns })}>
        {headers.map(({ key }, idx) => (
          <td key={`${key}-${columns[key]}-${idx}`}>{columns[key]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }),
  ),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.shape(),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};

TableBody.defaultProps = {
  rows: [],
};

export default TableBody;
