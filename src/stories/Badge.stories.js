import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { Badge as BadgeComponent } from '../../src'

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [centerDecorator],
}

const Template = args => <BadgeComponent {...args} />
export const Badge = Template.bind({})
Badge.args = {
  badgeText: 8,
  text: 'Notifications',
}
