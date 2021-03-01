import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { Label } from '../index'

export default {
  title: 'Elements/Label',
  component: Label,
  decorators: [centerDecorator],
}

const Template = (args) => <Label text="label" {...args} />
export const Playground = Template.bind({})
