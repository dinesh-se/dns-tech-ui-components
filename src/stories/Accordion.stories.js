import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { Accordion as AccordionComponent } from '../../src'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [centerDecorator],
}

const Template = args => <AccordionComponent {...args} />
export const Accordion = Template.bind({})
Accordion.args = {
  displayIcon: true,
  list: [
    {
      title: 'Elements',
      body: (
        <ul>
          <li>Element 1</li>
          <li>Element 2</li>
        </ul>
      )
    },
    {
      title: 'Layout',
      body: (
        <ul>
          <li>Layout 1</li>
          <li>Layout 2</li>
        </ul>
      )
    },
    {
      title: 'Components',
      body: (
        <ul>
          <li>Component 1</li>
          <li>Component 2</li>
        </ul>
      )
    }
  ],
  name: 'example-1',
  type: 'radio',
}
Accordion.argTypes = {
  list: {
    control: null,
  },
  type: {
    control: {
      type: 'inline-radio',
      options: ['checkbox', 'radio'],
    }
  }
}
