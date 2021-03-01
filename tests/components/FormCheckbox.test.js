import React from 'react'
import { mount } from 'enzyme'

import { FormCheckbox } from '../../src'

describe('Checkbox component', () => {
  let element

  const mountComponent = (props) => {
    element = mount(<FormCheckbox {...props} />)
  }

  describe('Checkbox component renders in default state', () => {
    it('Given the component is rendered', () => mountComponent())
    it('Expect the component renders in default state', () => {
      expect(element.find('.checkbox')).toHaveLength(1)
      expect(element.find('.checkbox').prop('disabled')).toBe(undefined)
      expect(element.find('i')).toHaveLength(1)
    })
  })
  
  describe('Checkbox component renders with label', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        label: 'Test Label',
      })
    })
    it('Expect the label to be rendered', () => {
      expect(element.find('.form-checkbox').text()).toBe('Test Label')
    })
  })

  describe('Checkbox renders in disabled state', () => {
    it('Given the component is mounted with disabled prop set to true', () => {
      mountComponent({
        disabled: true,
      })
    })
    it('Expect the checkbox renders in disabled state', () => {
      expect(element.find('.checkbox').prop('disabled')).toBeTruthy()
    })
  })

  describe('Checkbox renders inline', () => {
    it('Given the component is mounted with inline prop set to true', () => {
      mountComponent({
        inline: true,
      })
    })
    it('Expect the checkbox renders inline', () => {
      expect(element.find('label.form-checkbox').hasClass('form-inline')).toBeTruthy()
    })
  })
  
  describe('Checkbox component renders with provided size', () => {
    it('Given the component is mounted with size prop set to a value', () => {
      mountComponent({
        size: 'sm',
      })
    })
    it('Expect the checkbox renders in specified size', () => {
      expect(element.find('label.form-checkbox').hasClass('input-sm')).toBeTruthy()
      expect(element.find('label.form-checkbox').hasClass('label-sm')).toBeTruthy()
    })
  })
  
  describe('Checkbox component renders with provided state', () => {
    it('Given the component is mounted with state prop set to a value', () => {
      mountComponent({
        state: 'error',
      })
    })
    it('Expect the form group renders in error state', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy()
    })
  })
  
  describe('Checkbox component renders with provided state and state message', () => {
    it('Given the component is mounted with state and stateMessage props set to a value', () => {
      mountComponent({
        state: 'error',
        stateMessage: 'Test Message',
      })
    })
    it('Expect the form group renders in error state and message', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy()
      expect(element.find('.form-input-hint').text()).toBe('Test Message')
    })
  })
})
