import React from 'react'
import { mount } from 'enzyme'

import { ProgressBar } from '../../src'

describe('ProgressBar Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <ProgressBar
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('div.bar-item').prop('aria-valuenow')).toBe(0)
      expect(element.find('div.bar-item').prop('aria-valuemin')).toBe('0')
      expect(element.find('div.bar-item').prop('aria-valuemax')).toBe('100')
      expect(element.find('div.bar-item').text()).toBe('')
    })
  })

  describe('renders with progress displayed', () => {
    it('Given the component is mounted with a progress count', () => {
      mountComponent({
        displayProgress: true,
        progress: 10
      })
    })
    it('Expect the component renders with progress displayed', () => {
      expect(element.find('div.bar-item').text()).toBe('10%')
    })
  })

  describe('renders in small size', () => {
    it('Given the component is mounted with size set to small', () => {
      mountComponent({
        small: true,
      })
    })
    it('Expect the component renders with class for small size', () => {
      expect(element.find('div.bar').hasClass('bar-sm')).toBeTruthy()
    })
  })

  describe('renders in small size and no progress displayed', () => {
    it('Given the component is mounted with a progress count and small size', () => {
      mountComponent({
        displayProgress: true,
        progress: 10,
        small: true,
      })
    })
    it('Expect the component doesn\'t show progress count in small size', () => {
      expect(element.find('div.bar-item').text()).toBe('')
    })
  })

  describe('renders with tooltip', () => {
    it('Given the component is mounted with tooltip set to enabled', () => {
      mountComponent({
        tooltip: true,
      })
    })
    it('Expect the component renders with tooltip data passed', () => {
      expect(element.find('div.bar').prop('data-tooltip')).toBe('0%')
    })
  })
})
