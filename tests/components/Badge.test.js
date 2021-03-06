import React from 'react'
import { mount } from 'enzyme'

import { Badge } from '../../src'

describe('Badge Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <Badge
        text="test"
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('span').hasClass('badge')).toBeTruthy()
    })
  })

  describe('renders with badge text', () => {
    it('Given the component is mounted with badge text', () => {
      mountComponent({
        badgeText: 10
      })
    })
    it('Expect the component renders with an attr set to badge text', () => {
      expect(element.find('span').hasClass('badge')).toBeTruthy()
      expect(element.find('span').prop('data-badge')).toBe(10)
    })
  })
})
