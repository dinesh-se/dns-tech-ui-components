import React, { Fragment } from 'react';

import { centerDecorator } from '../../.storybook/decorator';
import { Button } from '../components/Button/';

export default {
  title: 'Elements/Button',
  component: Button,
  decorators: [centerDecorator]
};

export const variants = () => (
  <Fragment>
    <Button label="default" />
    <Button label="primary" variant="primary" />
    <Button label="link" variant="link" />
  </Fragment>
);

export const sizes = () => (
  <Fragment>
    <Button label="small" size="sm" />
    <Button label="medium" />
    <Button label="large" size="lg" />
    <Button label="block" size="block" />
  </Fragment>
);

export const states = () => (
  <Fragment>
    <Button label="success" state="success" />
    <Button label="error" state="error" />
  </Fragment>
);

export const loading = () => (
  <Fragment>
    <Button label="default" loading />
    <Button label="primary" variant="primary" loading />
    <Button label="link" variant="link" loading />
  </Fragment>
);

export const buttonGroups = () => (
  <Fragment>
    <div className="btn-group btn-group-block">
      <Button label="first button" />
      <Button label="second button" />
      <Button label="third button" />
    </div>
  </Fragment>
);

export const disabled = () => (
  <Fragment>
    <Button label="default" disabled />
    <Button label="primary" variant="primary" disabled />
    <Button label="link" variant="link" disabled />
  </Fragment>
);

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: 'Button',
};
