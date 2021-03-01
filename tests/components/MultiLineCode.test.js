import React from 'react'
import { mount } from 'enzyme'

import { MultiLineCode } from '../../src'

describe('MultiLineCode component', () => {
  let element

  const mountComponent = (props) => {
    element = mount(
      <MultiLineCode {...props} />
    )
  }
  const children = '<p>test</p>'

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        children,
      })
    })
    it('Expect the component is renders in default state', () => {
      expect(element.find('pre').hasClass('code')).toBeTruthy()
      expect(element.find('code').text()).toBe('<p>test</p>')
    })
  })

  describe('renders with language', () => {
    it('Given the component is mounted', () => {
      mountComponent({
        children,
        language: 'HTML',
      })
    })
    it('Expect the component is renders in default state', () => {
      expect(element.find('code').hasClass('language-HTML')).toBeTruthy()
    })
  })

  describe('renders with custom style', () => {
    it('Given the component is mounted with custom style', () => {
      mountComponent({
        children,
        style: {
          custom: '',
        }
      })
    })
    it('Expect the component is renders with custom style', () => {
      expect(element.find('SyntaxHighlighter').prop('style')).toEqual({ custom: '' })
    })
  })
  
})
