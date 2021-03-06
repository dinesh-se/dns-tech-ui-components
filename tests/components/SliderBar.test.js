import React from 'react'
import { mount } from 'enzyme'

import { SliderBar } from '../../src'

describe('SliderBar Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <SliderBar
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('.btn').hasClass('tooltip')).toBeTruthy()
      expect(element.find('.btn').prop('data-tooltip')).toBe('0%')
    })
  })

  describe('renders with no tooltip', () => {
    it('Given the component is mounted with tooltip disabled', () => {
      mountComponent({
        range: 10,
        tooltip: false,
      })
    })
    it('Expect the component renders with no tooltip', () => {
      expect(element.find('.btn').hasClass('tooltip')).toBeFalsy()
    })
  })

  describe('renders with two sliders', () => {
    it('Given the component is mounted with two knobs for sliders', () => {
      mountComponent({
        range: 10,
        toRange: 60,
      })
    })
    it('Expect the component renders with sliders and tooltips', () => {
      expect(element.find('.bar-slider-btn')).toHaveLength(2)
      expect(element.find('.bar-slider-btn').at(0).prop('data-tooltip')).toBe('10%')
      expect(element.find('.bar-slider-btn').at(1).prop('data-tooltip')).toBe('60%')
    })
  })

  describe('renders with two sliders and no tooltips', () => {
    it('Given the component is mounted with two knobs for sliders and tooltip flag as false', () => {
      mountComponent({
        range: 10,
        toRange: 60,
        tooltip: false,
      })
    })
    it('Expect the component renders with sliders', () => {
      expect(element.find('.bar-slider-btn')).toHaveLength(2)
    })
  })
})
