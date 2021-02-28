import React, { Fragment } from 'react'

import { centerDecorator, columnDecorator } from '../../.storybook/decorator'
import { Heading as HeadingComponent } from '../../src'

export default {
  title: 'Elements/Typography',
  component: HeadingComponent,
  decorators: [columnDecorator, centerDecorator],
}

const HeadingTemplate = (args) => <HeadingComponent {...args} />
export const Heading = HeadingTemplate.bind({})
Heading.args = {
  text: 'Heading',
  size: 6,
}
Heading.argTypes = {
  size: {
    control: {
      type: 'number',
      min: 1,
      max: 6,
    }
  }
}

export const Headings = () => (
  <Fragment>
    <HeadingComponent text="Heading 1" size={1} />
    <HeadingComponent text="Heading 2" size={2} />
    <HeadingComponent text="Heading 3" size={3} />
    <HeadingComponent text="Heading 4" size={4} />
    <HeadingComponent text="Heading 5" size={5} />
    <HeadingComponent text="Heading 6" size={6} />
  </Fragment>
)
