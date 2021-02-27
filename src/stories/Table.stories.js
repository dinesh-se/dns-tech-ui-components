import React from 'react';

import { centerDecorator } from '../../.storybook/decorator';
import { Table } from '../index';

export default {
  title: 'Elements/Table',
  component: Table,
  decorators: [centerDecorator],
};

const headers = [
  {
    key: 'header-1',
    displayText: 'Header 1',
  },
  {
    key: 'header-2',
    displayText: 'Header 2',
  },
];

const rows = [
  {
    columns: {
      'header-1': 'Column 11',
      'header-2': 'Column 12',
    },
    id: 1,
  },
  {
    columns: {
      'header-1': 'Column 21',
      'header-2': 'Column 22',
    },
    id: 2,
  },
];

export const Default = () => <Table headers={headers} rows={rows} />;

export const NoData = () => <Table headers={headers} />;

const Template = args => <Table {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  headers,
  rows,
};
