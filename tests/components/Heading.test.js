import React from 'react'
import { mount } from 'enzyme'

import { Heading } from '../../src'

describe('Heading component', () => {
  let element

  const mountComponent = (props) => {
    element = mount(<Heading text="Test" {...props} />)
  }

  describe('renders in default state h1', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders with h1 tag', () => {
      expect(element.find('h1').text()).toBe('Test')
    })
  })
  
  describe('renders with passed heading size', () => {
    it('Given the component is mounted with size', () => {
      mountComponent({
        size: 4,
      })
    })
    it('Expect the component renders with passed heading size', () => {
      expect(element.find('h4')).toHaveLength(1)
    })
  })
})
