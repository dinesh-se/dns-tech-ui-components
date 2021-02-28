import React from 'react'
import { mount } from 'enzyme'

import { Label } from '../../src'

describe('Label Component', () => {
  let element

  const mountComponent = (props) => {
    element = mount(
      <Label text="test" {...props} />
    )
  }

  describe('Label component in default state', () => {
    it('Given the component is mounted', () => mountComponent())
    it('Expect the label text is displayed', () => {
      expect(element.text()).toBe('test')
      expect(element.find('span').hasClass('label')).toBeTruthy()
    })
  })

  describe('Label component with type', () => {
    it('Given the component is mounted with type prop set to a value', () => {
      mountComponent({
        type: 'success',
      })
    })
    it('Expect the label element has class according to type', () => {
      expect(element.find('span').hasClass('label-success')).toBeTruthy()
    })
  })

  describe('Label component in rounded shape', () => {
    it('Given the component is mounted with rounded prop set to true', () => {
      mountComponent({
        rounded: true,
      })
    })
    it('Expect the label element has class rounded applied', () => {
      expect(element.find('span').hasClass('label-rounded')).toBeTruthy()
    })
  })
})
