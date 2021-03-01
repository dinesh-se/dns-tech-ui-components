import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { 
  Code,
  MultiLineCode 
} from '../index'

export default {
  title: 'Elements/Code',
  subcomponents: {
    Code, 
    MultiLineCode,
  },
  decorators: [centerDecorator],
}

const CodeTemplate = (args) => <p>This is a <Code text="sample" {...args} />.</p>
export const Inline = CodeTemplate.bind({})
Inline.args = {
  className: '',
  text: 'sample',
}

const TemplateString = 
`<!-- code snippets -->
<button class="btn">
  Submit
</button>`
const MultiLineCodeTemplate = (args) => (
  <MultiLineCode {...args} >
    {TemplateString}
  </MultiLineCode>
)
export const MultiLine = MultiLineCodeTemplate.bind({})
MultiLine.args = {
  language: 'HTML',
}
