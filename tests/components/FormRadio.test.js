import React from 'react'
import { mount } from 'enzyme'

import { FormRadio } from '../../src'

describe('Radio component', () => {
  let element
  const options = ['Radio 1', 'Radio 2']

  const mountComponent = (props) => {
    element = mount(<FormRadio name="test" options={options} {...props} />)
  }

  describe('Radio component renders in default state', () => {
    it('Given the component is rendered', () => mountComponent())
    it('Expect the radio button is rendered', () => {
      expect(element.find('.form-radio input')).toHaveLength(2)
      expect(element.find('.form-radio input').at(0).prop('disabled')).toBeFalsy()
      expect(element.find('.form-label')).toHaveLength(0)
    })
  })

  describe('Radio component renders with label for group', () => {
    it('Given the component is rendered with label prop set to a value', () => {
      mountComponent({
        label: 'Test Label',
      })
    })
    it('Expect the radio buttons rendered with label', () => {
      expect(element.find('.form-label').text()).toBe('Test Label')
    })
  })
  
  describe('Radio component renders in disabled state', () => {
    it('Given the component is rendered with disabled prop set to true', () => {
      mountComponent({
        disabled: true,
      })
    })
    it('Expect the radio buttons rendered in disabled state', () => {
      expect(element.find('.form-radio input').at(0).prop('disabled')).toBeTruthy()
    })
  })
  
  describe('Radio component renders inline', () => {
    it('Given the component is rendered with inline prop set to true', () => {
      mountComponent({
        inline: true,
      })
    })
    it('Expect the radio buttons rendered inline', () => {
      expect(element.find('.form-radio').at(0).hasClass('form-inline')).toBeTruthy()
    })
  })

  describe('Radio component renders with provided size', () => {
    it('Given the component is mounted with size prop set to a value', () => {
      mountComponent({
        label: 'Test',
        size: 'sm',
      })
    })
    it('Expect the radio buttons renders in specified size', () => {
      expect(element.find('label.form-radio').at(1).hasClass('input-sm')).toBeTruthy()
      expect(element.find('label.form-label').hasClass('label-sm')).toBeTruthy()
    })
  })
  
  describe('Radio component renders with provided state', () => {
    it('Given the component is mounted with state prop set to a value', () => {
      mountComponent({
        state: 'error',
      })
    })
    it('Expect the form group renders in error state', () => {
      expect(element.find('div.form-group').hasClass('has-error')).toBeTruthy()
    })
  })
  
  describe('Radio component renders with provided state and state message', () => {
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
