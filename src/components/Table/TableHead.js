import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({headers}) => (
  <thead>
    <tr>
      {headers.map(({key, value}) => (
        <th key={key}>{value}</th>
      ))}
    </tr>
  </thead>
);

TableHead.protoTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      styles: PropTypes.string,
    }),
  ),
};

export default TableHead;