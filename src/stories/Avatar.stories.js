import React, { Fragment } from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { Avatar } from '../../src'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [centerDecorator],
}

const src = 'https://picturepan2.github.io/spectre/img/avatar-1.png'
export const Sizes = () => (
  <Fragment>
    <Avatar src={src} size="xl" />
    <Avatar src={src} size="lg" />
    <Avatar src={src} size="m" />
    <Avatar src={src} size="sm" />
    <Avatar src={src} size="xs" />
  </Fragment>
)

export const Statuses = () => (
  <Fragment>
    <Avatar initial="DH" presence="online" />
    <Avatar initial="DH" presence="busy" />
    <Avatar initial="DH" presence="away" />
    <Avatar initial="DH" presence="offline" />
  </Fragment>
)

export const Badge = () => (
  <Fragment>
    <Avatar initial="DH" badge />
    <Avatar src={src} badgeText="8" />
  </Fragment>
)

const Template = args => <Avatar {...args} />
export const Playground = Template.bind({})
Playground.args = {
  initial: 'DH',
  src,
  size: 'm',
}
Playground.argTypes = {
  size: {
    control: {
      type: 'inline-radio',
      options: ['xs', 'sm', 'm', 'lg', 'xl'],
    },
  },
  presence: {
    control: {
      type: 'inline-radio',
      options: ['online', 'busy', 'away', 'offline'],
    }
  }
}
