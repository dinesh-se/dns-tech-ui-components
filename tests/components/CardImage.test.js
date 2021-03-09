import React from 'react'
import { mount } from 'enzyme'

import { CardImage } from '../../src'

describe('CardImage Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <CardImage
        src="./path/to/image"
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('div').hasClass('card-image')).toBeTruthy()
      expect(element.find('img').prop('src')).toEqual('./path/to/image')
    })
  })
})
