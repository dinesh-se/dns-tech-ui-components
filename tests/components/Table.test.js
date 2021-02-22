import React from 'react';
import { mount } from 'enzyme';

import { Table } from '../../src';
import { tableHeaders, tableRows } from '../testData';

describe('Table component', () => {
  let element;

  const mountComponent = props => {
    element = mount(
      <Table headers={tableHeaders} rows={tableRows} {...props} />,
    );
  };

  describe('Table renders with default data', () => {
    it('Given the table component is mounted', () => mountComponent());
    it('Expect the table renders with header and two rows', () => {
      expect(element.find('th').at(0).text()).toBe('Header 1');
      expect(element.find('th').at(1).text()).toBe('Header 2');
      expect(element.find('tr').at(1).find('td').at(0).text()).toBe(
        'Column 11',
      );
      expect(element.find('tr').at(2).find('td').at(1).text()).toBe(
        'Column 22',
      );
    });
  });

  describe('Table renders with an empty cell', () => {
    it('Given the table component is mounted', () => {
      mountComponent({
        rows: [
          {
            columns: {
              'header-2': 'Column 12',
            },
          },
        ],
      });
    });
    it('Expect the table cell to contain empty cell', () => {
      expect(element.find('tr').at(1).find('td').at(0).text()).toBe('');
      expect(element.find('tr').at(1).find('td').at(1).text()).toBe(
        'Column 12',
      );
    });
  });

  describe('Table renders with styling', () => {
    it('Given the table component is mounted', () => {
      mountComponent({
        hover: true,
        scroll: true,
        striped: true,
      });
    });
    it('Expect the table to have styling applied', () => {
      expect(
        ['table-hover', 'table-scroll', 'table-striped'].every(c =>
          element.find('table').hasClass(c),
        ),
      ).toBeTruthy();
    });
  });

  describe('Table renders with no rows', () => {
    it('Given the table component is mounted', () => {
      mountComponent({
        rows: [],
      });
    });
    it('Expect the table to display no data message', () => {
      expect(element.find('div.table-no-data').text()).toBe('No Data');
    });
  });
});
