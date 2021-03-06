import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'

import { centerDecorator } from '../../.storybook/decorator'

import {
  Button,
  InputGroup as InputGroupComponent,
  Checkbox,
  Input,
  Select,
  Switch,
} from '../index'

export default {
  title: 'Examples/Component Groups',
  decorators: [centerDecorator]
}

const Columns = styled.div.attrs(({ className }) => ({
  className: cn(className, 'columns'),
}))`
  .column {
    padding: .4rem;
  }
`

export const InputGroups = () => (
  <div className="container">
    <Columns>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent
          size="sm"
        >
          <Input placeholder="username" />
          <Select options={['Slack', 'Skype', 'Hipchat']} />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent
          addonText="slack.com/"
          size="sm"
        >
          <Input placeholder="site name" />
          <Button label="Submit" variant="primary" inputGroup />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent>
          <Input placeholder="username" />
          <Select options={['Slack', 'Skype', 'Hipchat']} />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent addonText="slack.com/">
          <Input placeholder="site name" />
          <Button label="Submit" variant="primary" inputGroup />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent>
          <Switch />
          <Input placeholder="name" />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent>
          <Checkbox />
          <Input placeholder="name" />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent size="lg">
          <Input placeholder="name" />
          <Select options={['Slack', 'Skype', 'Hipchat']} />
        </InputGroupComponent>
      </div>
      <div className="column col-6 col-xs-12">
        <InputGroupComponent 
          addonText="slack.com/"
          size="lg"
        >
          <Input placeholder='site name' />
          <Button label="Submit" variant="primary" inputGroup />
        </InputGroupComponent>
      </div>
    </Columns>
  </div>
)

const Template = (args) => (
  <InputGroupComponent {...args} >
    <Input placeholder='site name' />
    <Button label="Submit" variant="primary" inputGroup />
  </InputGroupComponent>
)
export const InputGroupControls = Template.bind({})
InputGroupControls.args = {
  addonText: 'slack.com/',
}
InputGroupControls.argTypes = {
  children: {
    control: null,
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['sm', 'lg'],
    }
  }
}
