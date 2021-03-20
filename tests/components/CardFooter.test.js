import React from 'react'
import { mount } from 'enzyme'

import { CardFooter } from '../../src'

describe('CardFooter Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <CardFooter
        {...props}
      >
        <p>test</p>
      </CardFooter>
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
