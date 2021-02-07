import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(({ key, displayText }) => (
        <th key={key}>{displayText}</th>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      displayText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableHead;
