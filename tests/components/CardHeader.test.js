import React from 'react'
import { mount } from 'enzyme'

import { CardHeader } from '../../src'

describe('CardHeader Component', () => {
  let element

  const mountComponent = props => {
    element = mount(
      <CardHeader
        title="Test title"
        {...props}
      />
    )
  }

  describe('renders in default state', () => {
    it('Given the component is mounted', () => {
      mountComponent()
    })
    it('Expect the component renders in default state', () => {
      expect(element.find('.card-title').hasClass('h5')).toBeTruthy()
      expect(element.find('.card-title').text()).toEqual('Test title')
      expect(element.find('.card-subtitle')).toHaveLength(0)
    })
  })

  describe('renders with subtitle', () => {
    it('Given the component is mounted with subtitle', () => {
      mountComponent({
        subtitle: 'Test subtitle',
      })
    })
    it('Expect the subtitle is rendered', () => {
      expect(element.find('.card-subtitle').hasClass('text-gray')).toBeTruthy()
      expect(element.find('.card-subtitle').text()).toEqual('Test subtitle')
    })
  })
  
  describe('renders with other contents', () => {
    it('Given the component is mounted with other contents', () => {
      mountComponent({
        otherContents: <p>test</p>
      })
    })
    it('Expect the other title is rendered above title', () => {
      expect(element.find('.card-header').childAt(0).type()).toEqual('p')
      expect(element.find('p').text()).toEqual('test')
    })
  })
})
