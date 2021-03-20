import React from 'react'
import { mount } from 'enzyme'

import { CardBody } from '../../src'

describe('CardBody Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <CardBody
        {...props}
      >
        <p>test</p>
      </CardBody>
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
