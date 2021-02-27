import React from 'react'
import { mount } from 'enzyme'

import { Code } from '../../src'

describe('Code Component', () => {
  let element

  const mountComponent = (props) => {
    element = mount(<Code {...props} />)
  }

  describe('Renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        text: 'test'
      })
    })
    it('Expect the inline code block is rendered', () => {
      expect(element.text()).toBe('test')
    })
  })
})
