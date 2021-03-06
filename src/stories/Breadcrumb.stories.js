import React from 'react'

import { centerDecorator } from '../../.storybook/decorator'
import { Breadcrumb as BreadcrumbComponent } from '../../src'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  decorators: [centerDecorator],
}

const Template = args => <BreadcrumbComponent {...args} />
export const Breadcrumb = Template.bind({})
Breadcrumb.args = {
  paths: [
    {
      linkText: 'Home'
    },
    {
      linkText: 'Settings'
    },
    {
      linkText: 'Spectre',
      text: 'Search result:',
    }
  ]
}
