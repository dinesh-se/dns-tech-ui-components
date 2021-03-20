import React from 'react'
import { mount } from 'enzyme'

import { Card } from '../../src'

describe('Card Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <Card
        {...props}
      >
        <p>test</p>
      </Card>
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('p').text()).toEqual('test')
    })
  })
})
