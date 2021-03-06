import React from 'react'
import { mount } from 'enzyme'

import { Accordion } from '../../src'
import AccordionItem from '../../src/components/Accordion/AccordionItem'

describe('Accordion Component', () => {
  let element

  const list = [
    {
      title: 'Test 1',
      body: 'Test body'
    },
    {
      title: 'Test 2',
      body: 'Test body'
    },
  ]
  const mountComponent = props => {
    element = mount(
      <Accordion
        list={list}
        name="test-name"
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.prop('type')).toBe('checkbox')
      expect(element.find(AccordionItem)).toHaveLength(2)
      expect(element.find(AccordionItem).at(0).find('input').prop('checked')).toBeUndefined()
      expect(element.find(AccordionItem).at(1).find('input').prop('checked')).toBeUndefined()
      expect(element.find('.accordion-header').find('label').at(0).text()).toBe('Test 1')
      expect(element.find('.accordion-header').find('label').at(1).text()).toBe('Test 2')
      expect(element.find('.accordion-header').find('i')).toHaveLength(2)
    })
  })

  describe('doesn\'t display icon when displayIcon passed as false', () => {
    it('Given the component is mounted with displayIcon set to false', () => {
      mountComponent({
        displayIcon: false,
      })
    })
    it('Expect the accordion header icons are not displayed', () => {
      expect(element.find('.accordion-header').find('i')).toHaveLength(0)
    })
  })

  describe('renders with custom icon name', () => {
    it('Given the component is mounted with iconName set to a value', () => {
      mountComponent({
        iconName: 'test-icon',
      })
    })
    it('Expect the accordion header renders with custom icon', () => {
      expect(element.find('.accordion-header').at(0).find('i').hasClass('test-icon')).toBeTruthy()
    })
  })
  
  describe('renders as radio type accordion', () => {
    it('Given the component is mounted with type set to radio', () => {
      mountComponent({
        type: 'radio',
      })
    })
    it('Expect the accordion type set to radio', () => {
      expect(element.prop('type')).toBe('radio')
      expect(element.find(AccordionItem).at(0).find('input').prop('type')).toBe('radio')
      expect(element.find(AccordionItem).at(1).find('input').prop('type')).toBe('radio')
    })
  })
})
