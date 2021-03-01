import React from 'react'
import { mount } from 'enzyme'

import { InputGroup } from '../../src'

describe('Input Group component', () => {
  let element

  const mountComponent = (props) => {
    element = mount(
      <InputGroup {...props}>
        <p>Child Element 1</p>
        <p>Child Element 2</p>
      </InputGroup>
    )
  }

  describe('Input Group component renders in default state', () => {
    it('Given the component is mounted', () => mountComponent())
    it('Expect the input group is rendered', () => {
      expect(element.find('.input-group')).toHaveLength(1)
      expect(element.find('p')).toHaveLength(2)
    })
  })

  describe('Input Group component renders with addon text', () => {
    it('Given the component is mounted with addon text', () => {
      mountComponent({
        addonText: 'Test',
      })
    })
    it('Expect the addon text is rendered', () => {
      expect(element.find('.input-group-addon').text()).toBe('Test')
    })
  })

  describe('Input Group component renders with addon text and size', () => {
    it('Given the component is mounted with addon text and size', () => {
      mountComponent({
        addonText: 'Test',
        size: 'lg',
      })
    })
    it('Expect the addon text is rendered', () => {
      expect(element.find('.input-group-addon').hasClass('addon-lg')).toBeTruthy()
      expect(element.find('p').at(0).prop('size')).toBe('lg')
    })
  })
})
