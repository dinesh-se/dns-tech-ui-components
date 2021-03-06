import React from 'react'
import { mount } from 'enzyme'

import { Breadcrumb } from '../../src'

describe('Breadcrumb Component', () => {
  let element

  const paths = [
    {
      linkText: 'link 1',
      url: './path-1',
    },
    {
      linkText: 'link 2',
      text: 'no hyperlink',
    },
    {
      linkText: 'link 3',
      text: 'test',
      url: './path-2'
    }
  ]
  const mountComponent = props => {
    element = mount(
      <Breadcrumb
        paths={paths}
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('.breadcrumb-item')).toHaveLength(3)
      expect(element.find('.breadcrumb-item a').at(0).text()).toBe('link 1')
      expect(element.find('.breadcrumb-item a').at(0).prop('href')).toBe('./path-1')
      expect(element.find('.breadcrumb-item a').at(1).text()).toBe('link 2')
      expect(element.find('.breadcrumb-item a').at(1).prop('href')).toBe('#')
    })
  })
})
