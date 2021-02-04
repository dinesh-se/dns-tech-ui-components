import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({headers, rows}) => (
  <tbody> 
    {rows.map(({columns, id}) => (
      <tr key={id}>
      {headers.map(({key}, idx) => (
        <td key={`${idx}-${key}-${columns[key]}`}>{columns[key]}</td>
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
      columns: PropTypes.shape,
    }),
  ),
};

export default TableBody;